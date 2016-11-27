//By: Felipe Ronderos
var path = require('path');
var app = require('express')();
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var session = require('express-session');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonencodedParser = bodyParser.json();

app.engine('.hbs', exphbs({
  defaultLayout: 'layout',
  extname: '.hbs',
  layoutsDir: path.join(__dirname),
  partialsDir: path.join(__dirname)
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname));


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

var accounts = [];
var likes = [];
var dislikes = [];
var matches = [];
var id = 1;

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

function findById(id,cb){
  var done = accounts.some(function(user) {
    if (user.id == id){
    	cb(null,user);
    	return true;
    } 
  });
  if (!done) cb(null,false);
}

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

app.use(require('express-session')(
	{ secret: '9as34aXjE2j4sSSEq1Z', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(urlencodedParser);
app.use(jsonencodedParser);

app.get("/",function (req, res) {
  if (!req.user)
    res.render('welcome');
  else
    res.render('profile',{user: req.user});
	});

app.post('/',
  passport.authenticate('local', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/match');
  });

function isLoggedin(req, res, next){
  if (req.user)
  	next();
  else
  	res.render('welcome',{login_error:"Please input a valid email and password combination"});
}

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

app.get('/profile', isLoggedin,
	function(req, res){
    res.render('profile',{user: req.user});
	});

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

function updateUser(user){
	accounts.forEach(function(account){
		if (account.id == user.id){
			var index = accounts.indexOf(account);
      accounts.splice(index,1);
      accounts.push(user);
		}
	});
}

app.get('/matches', isLoggedin,
	function(req, res){
		var matches = getMatchesInfo(req.user);
    res.render('matches',{user: req.user,matches:matches});
	});

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

app.get('/match',isLoggedin,
  function(req, res){
    res.render('match',{user: req.user});
  });

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

function dislike(uid,u2id,fun){
  if (uid && u2id){
    dislikes.push({u1:uid,u2:u2id});
  	fun(null,true);
  }
}

app.get('/logout', function(req, res){
	req.logout();
	res.sendStatus(200);
	//res.redirect('/');
});

const port = process.env.PORT || 3000;

app.listen(port, function (err) {
  if (err) {
    throw err
  }
  console.log(`server is listening on ${port}...`)
});