# Software Testing Document for Benefits With Friends
# Version 1.0
# Prepared by Jose Hernandez, Tuyet-Ngoc Le, Felipe Ronderos, Thanh Trinh, and Jerahmeel Wilson

#### Test Case # and Name: 1.1 Account Creation

Created by:

Executed by:

Priority: High

Short description: Create an account for new users

Preconditions: The user is a new user with no account made and wishes to use the website. The system displays the main page of the website.

Actions/sample input data/expected outcomes:

1. Enters “jsmith@lsu.edu” as email address - The system displays a message asking the user to enter a username

2. Enters “johnsmith1” as username - The system displays a message asking the user to enter a password

3. Enters “freestuff2” as password - The system displays a message asking the user to confirm/re-enter the password

4. Re-enters “freestuff2” - The system displays a message of a successful operation. The system redirects user to the home page of the Benefits With Friends website

Postconditions: The email address “jsmith@lsu.edu”, username “johnsmith1”, and password “freestuff2” of the user are saved in the database
****
#### Test Case # and Name: 1.2 Unsuccessful Account Creation

Created by:

Executed by:

Priority: High

Short description: Create an account for a new user fails

Preconditions: Username “johnsmith1” is already saved into the database.

Actions/sample input data/expected outcomes: 

1. User enters “johnsmith1” as username - System display error message that the username is taken
2. User click ok button - System’s error message disappear

Postconditions: System prompts the user to enter a different username.
****
#### Test Case # and Name: 2.1 Log In

Created by:

Executed by:

Priority: High

Short description: User log in to the website

Preconditions: The user has an account and isn’t logged into the website. The system displays the main page of the website. The user’s username and password are “johnsmith1” and “freestuff2”

Actions/sample input data/expected outcomes:

1. Enters “johnsmith1” as username and “freestuff2” as password - the system displays a message telling the user that the system is logging them in

Postconditions: The user is redirected to the user main menu of the website
****
#### Test Case # and Name: 2.2 Unsuccessful Log In

Created by:

Executed by:

Priority: High

Short description: User log in to the website fails

Preconditions: The user’s username and password are “johnsmith1” and “freestuff2”

Actions/sample input data/expected outcomes:

1. Enters “jsmith1” as username and “freestuff2” as password - the system displays a message telling the user about invalid inputs.

Postconditions: The system asks the user to try again.
****
#### Test Case # and Name: 2.3 Forgot Username/Password

Created by:

Executed by:

Priority: Medium

Short description: User forgets his/her username or password

Preconditions: The user’s email address, username, and password are “jsmith@lsu.edu”, “johnsmith1”, and “freestuff2”

Actions/sample input data/expected outcomes:

1. Enters wrong username/password at least 3 times - The system provides a Forgot My Username/Password option.
2. User selects the Forgot My Username/Password option and provides his email address “jsmith@lsu.edu” - the system will send an email to “jsmith@lsu.edu” with a new username and password, “aaaa” and “1234bwf”

Postconditions: The user’s new username and password are changed to “aaaa” and “1234bwf” in the database
****
#### Test Case # and Name: 3.1 Posting/Adding an Employee Benefit (EB)

Created by:

Executed by:

Priority: Medium

Short description: User posts an EB to the public board

Preconditions: The user is logged in. No EB’s were posted by the user.

Actions/sample input data/expected outcomes:

1. Enters workplace name “Taco Bell” - 
2. Enters description of Employee Benefit “Free tacos” - the system will ask the user to confirm before submitting the EB to the public board

Postconditions: The user’s EB is saved into the database and posted onto the public board.
****
#### Test Case # and Name: 3.2 Unsuccessful EB

Created by:

Executed by:

Priority: Medium

Short description: EB couldn’t be posted due to invalid input

Preconditions: The user is logged in. No EB’s were posted by the user.

Actions/sample input data/expected outcomes:

1. Leaves workplace name empty -
2. Enters description of EB “Free tacos” - The system will display an error message saying workplace name is required

Postconditions: The EB won’t be added to the database or website until the necessary information is provided
****
#### Test Case # and Name: 4.1 Selecting an EB

Created by:

Executed by:

Priority: Medium

Short description: User selects an EB

Preconditions: The user is logged in. User has posted at least one EB.

Actions/sample input data/expected outcomes:

1. User selects an EB - EB is now marked to distinguish from others in the public board

Postconditions: The user’s marked EB(s) are saved into a list.
****
#### Test Case # and Name: 5.1 User Interaction

Created by:

Executed by:

Priority: Medium

Short description: When two users match, both users are prompted to contact each other

Preconditions: The user is logged in and they have posted/added an EB. 

Actions/sample input data/expected outcomes:

1. User “johnsmith1” selects “nscavenger0”’s EB -
2. User “nscavenger0” selects “johnsmith1”’s EB - The system displays a message to both users that there has been a match.

Postconditions: The users are prompted to contact each other by email.
****
#### Test Case # and Name: 6.1 Deleting an EB

Created by:

Executed by:

Priority: Medium

Short description: User decides to delete his/her EB

Preconditions: The user is logged in. The user have at least one EB added.

Actions/sample input data/expected outcomes:

1. User click the delete button - System ask the user to confirm if he/she wishes to delete the EB
2. User click confirm - System delete the user’s EB

Postconditions: The EB is deleted from the database and will no longer be listed on the public board
****
#### Test Case # and Name: 6.2 Unsuccessful deletion of EB

Created by:

Executed by:

Priority: Medium

Short description: User decide not to delete their EB after clicking edit

Preconditions: User is logged in and no EBs were created beforehand.

Actions/sample input data/expected outcomes:

1. User click the delete button - System will display an error message saying no EBs were created

Postconditions: The system does nothing else.
****
#### Test Case # and Name: 7.1 Update EB

Created by:

Executed by:

Priority: Medium

Short description: User decides to update his/her EB

Preconditions: The user is logged in and have created at least one EB.

Actions/sample input data/expected outcomes:

1. User click the update button - System will show the EB as it would during creation
2. User changes workplace from “Taco Bell” to “McDonald’s”
3. User changes description of EB from “Free tacos” to “Free chicken nuggets” - The system will ask for confirmation
4. User click confirm - EB is updated with new information

Postconditions: The EB is updated on the website and database.
****
#### Test Case # and Name: 7.2 Unsuccessful EB Update

Created by:

Executed by:

Priority: Medium

Short description: User unsuccessfully tries to update his/her EB

Preconditions: The user is logged in but has not created an EB beforehand

Actions/sample input data/expected outcomes:

1. User clicks the update button - the system will display an error message saying no EBs were created

Postconditions: The system does nothing else.
