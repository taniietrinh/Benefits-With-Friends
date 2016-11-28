//By: Felipe Ronderos
//Import required modules
var path = require('path');
var app = require('express')();
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var session = require('express-session');
/*
Initialize parser objects.These are used by the url handlers 
and passport in order to acess data in requests.
*/
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonencodedParser = bodyParser.json();
/*
Sets the app to use handlebars and configures the path for templates.
*/
app.engine('.hbs', exphbs({
  defaultLayout: 'layout',
  extname: '.hbs',
  layoutsDir: path.join(__dirname),
  partialsDir: path.join(__dirname)
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname));
/*
Initializes a passport "strategy" for local authentication.
This parses the request object until the usernameField (in this case email) 
and a field called "password" are found. Then the function defined below
is called with these calues and a callback which sets the user cookies and adds
a user to the request object when called (the first field is for errors).
*/
passport.use(new localStrategy({
    usernameField: 'email'
  },
  function(username, password, cb) {
  	//username cannot be changed
  	var email = username;
    findByemail(email, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      if (user.password != password) { return cb(null, false); }
      return cb(null, user);
    });
  }));
/*
Initialize data structures in memory. Id will be incremented when adding users.
*/
var accounts = [];
var likes = [];
var dislikes = [];
var matches = [];
var id = 1;
/*
Find an account by an email and  pass the account to the callback as the second argument.
If none, pass false.
*/
function findByemail(email,cb){
	var done = accounts.some(function (user){
		if (user.email == email){
			cb(null,user);
			return true;
		}
		return false 
	});
	if (!done) return cb(null,false);
}
/*
Find an account by an id and  pass the account to the callback as the second argument.
If none, pass false.
*/
function findById(id,cb){
  var done = accounts.some(function(user) {
    if (user.id == id){
    	cb(null,user);
    	return true;
    } 
  });
  if (!done) cb(null,false);
}
/*
Places the user's id in a session cookie
*/
passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});
/*
Fetches the user by the id in a session cookie
*/
passport.deserializeUser(function(id, cb) {
  findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});
/*
Initializes sessions functionality and sets several handlers before the first middleware is encountered.
*/
app.use(require('express-session')(
	{ secret: '9as34aXjE2j4sSSEq1Z', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(urlencodedParser);
app.use(jsonencodedParser);

//Renders the welcome page or the user's profile page if logged in
app.get("/",function (req, res) {
  if (!req.user)
    res.render('welcome');
  else
    res.render('profile',{user: req.user});
	});
//Checks if user is logged in and redirects appropriately
app.post('/',
  passport.authenticate('local', { failureRedirect: '/match' }),
  function(req, res) {
    res.redirect('/match');
  });
//Middleware which redirects user to main page if not logged in. 
//This is called by almost all routes for authentication.
function isLoggedin(req, res, next){
  if (req.user)
  	next();
  else
  	res.render('welcome',{login_error:"Please input a valid email and password combination"});
}
//Creates an account and redirects the user to profile page
app.post('/signup',
	function(req, res){
		createAccount(req.body,function(err,user){
      if (err){
      	res.render('welcome',{signup_error:err});
      }
      else{
      	req.login(user, function(err) {
				  return res.redirect('/profile');
				});
      }
		});
	});


//Creates an account
function createAccount(body,fun){
  if (body){
  	var user = {id:id++};
  	var attrs = ["name","email","password","benefit"];
  	var allIn = attrs.every(function(attr){
  		if (body[attr]) return true;
  		return false;
  	});
  	if (!allIn) return fun(new Error("Missing attributes"));
  	attrs.forEach(function(attr){
  		user[attr] = body[attr];
  	})
    var email_used = accounts.some(function(account){
      if (account.email == user.email){
        return true;
      }});
    if (email_used)
      return fun(new Error("Email taken"));
  	accounts.push(user);
    fun(null,user);
  }
  else{
  	fun(new Error("Missing attributes"));
  	//TODO
  }
}
//Renders the profile page
app.get('/profile', isLoggedin,
	function(req, res){
    res.render('profile',{user: req.user});
	});
//Alters the profile page
app.post('/profile', isLoggedin,
	function(req, res){
		var body = req.body;
		var attrs = ["name","email","benefit","current_password"];
  	var allIn = attrs.every(function(attr){
  		if (body[attr]) return true;
  		return false;
  	});
  	if (allIn){
	  	if (body["current_password"] == req.user.password){
	  		var attrs = ["name","email","benefit"];
		  	var allIn = attrs.forEach(function(attr){
		  		req.user[attr] = body[attr];
		  	});
		  	if ((body["password"] != null)&&(body["password"] != "")){
		  		req.user["password"] = body["password"];
		  	}
		  	updateUser(req.user);
	  	}
    }
    res.redirect('/profile')
	});
//Replaces a user with the user that is passed in if their ID values are the same. 
function updateUser(user){
	accounts.forEach(function(account){
		if (account.id == user.id){
			var index = accounts.indexOf(account);
      accounts.splice(index,1);
      accounts.push(user);
		}
	});
}
//Returns and render's a user's matches
app.get('/matches', isLoggedin,
	function(req, res){
		var matches = getMatchesInfo(req.user);
    res.render('matches',{user: req.user,matches:matches});
	});
//Gets the matches information for a certain user
function getMatchesInfo(user){
	var arr = [];
	matches.forEach(function(match){
		if (match.u1==user.id){
			var tmp = getAccountById(match.u2);
			if (tmp){
				tmp["time"] = match.time;
			  arr.push(tmp);
			}
		}
		else if (match.u2==user.id){
			var tmp = getAccountById(match.u1);
			if (tmp){
				tmp["time"] = match.time;
			  arr.push(tmp);
			}
		}
	});
	return arr;
}
//Returns an account when its ID is passed in.
function getAccountById(id){
	var user = null;
	accounts.some(function(account){
		if (account.id == id){
			user = account;
			return true;
		}
	});
	return user;
}
//Renders the matches page
app.get('/match',isLoggedin,
  function(req, res){
    res.render('match',{user: req.user});
  });
//Gets the next 10 potential matches for a user who is logged in.
app.get('/next10', isLoggedin,
	function(req, res){
		var users = [];
		var user = req.user;
    var voted_on_ID = [user.id];

    matches.forEach(function(match){
    	if (match.u1 == user.id) voted_on_ID.push(match.u2);
    	else if (match.u2 == user.id) voted_on_ID.push(match.u1);
    });

    likes.forEach(function(like){
      if (like.u1 == user.id){
        voted_on_ID.push(like.u2);
      }
    });

    dislikes.forEach(function(dislike){
      if (dislike.u1 == user.id){
        voted_on_ID.push(dislike.u2);
      }
    });

	  likes.forEach(function(like){
      if (like.u2 == user.id){
        accounts.forEach(function(account){
        	if ((account.id == like.u1)&&(0 > voted_on_ID.indexOf(account.id))){
            users.push(account);
            voted_on_ID.push(account.id);
            if (users.length == 10){
            	return res.send(users);
            }
        	}
        });
      } 
	  });

	  accounts.forEach(function(account){
      if (0 > voted_on_ID.indexOf(account.id)){
      	users.push(account);
      	if (users.length == 10){
          return res.send(users);
      	}
      }
	  });
	  return res.send(users);
	});

//Records a like by the user who is logged in.
app.post('/like', isLoggedin,
	function(req, res){
		var user2id = req.body.user2id;
		like(req.user.id,user2id, function(err,bool){
			if(err){
				//TODO;
			}
			else{
				res.sendStatus(200);
			}
		});
	});
//Saves the like ids to the database/data structure
function like(uid,u2id,fun){
  if (uid && u2id){
    var done = likes.some(function(like){
      if (like.u1 == u2id && like.u2 == uid){
      	var index = likes.indexOf(like);
      	likes.splice(index,1);
      	var d = new Date();
        var t = d.getTime();
      	matches.push({u1:u2id,u2:uid,time:t});
      	return true;
      }
    })
    if (!done) likes.push({u1:uid,u2:u2id});
  	fun(null,true);
  }
  else{
  	//TODO
  }
}
//Records a like by the user who is logged in.
app.post('/dislike', isLoggedin,
	function(req, res){
		var user2id = req.body.user2id;
		dislike(req.user.id,user2id, function(err,bool){
			if(err){
				//TODO;
			}
			else{
				res.sendStatus(200);
			}
		});
	});
//Saves the like ids to the database/data structure
function dislike(uid,u2id,fun){
  if (uid && u2id){
    dislikes.push({u1:uid,u2:u2id});
  	fun(null,true);
  }
}
//Logs the current user out
app.get('/logout', function(req, res){
	req.logout();
	res.sendStatus(200);
	//res.redirect('/');
});
//Port for server to listen on
const port = process.env.PORT || 3000;
//Initializes server listening on port 3000
app.listen(port, function (err) {
  if (err) {
    throw err
  }
  console.log(`server is listening on ${port}...`)
});