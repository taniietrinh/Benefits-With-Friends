# Software Requirements Specification for Benefits With Friends
# Version 1.0
# Prepared by Jose Hernandez, Tuyet-Ngoc Le, Felipe Ronderos, Thanh Trinh, Jerahmeel Wilson

****
### 1. 	Introduction

#### 1.1 	Purpose

The purpose of this document is to give a detailed description of the requirements for Benefits With Friends. It will describe the purpose and development of the system. This document will also explain the constraints and interface. Since Benefits With Friends will be a new product, this document will be used as a reference to developing the first version of the system.

#### 1.2 	Document Conventions

All typographic conventions in the document are the default conventions of this document. Every requirement is expected to be high or medium priority.

#### 1.3 	Intended Audience and Reading Suggestions

The intended audience for this document is the TA for Nash Mahmoud’s CSC4330 class and Dr. Nash. The SRS document contains a description of the systems which make up the Benefits With Friends service. 

#### 1.4 	Product Scope

Benefits With Friends is a web-based service which allows users to use each other’s employee benefits. The corporate goal of this service is to allow employees of low-earning jobs to maximize the benefits offered by their employers. The product will be free and accessible through any web browser connected to the internet.
#### 1.5 	References

IEEE Std 830-1998 Recommended Practice for Software Requirements Specifications. IEEE Computer Society, 1998.
****
### 2. 	Overall Description

#### 2.1 	Product Perspective
 
Benefits With Friends (BWF) is a service intended to allow employees to use each other’s employee benefits. BWF is an original self-contained product. The product will be presented as a website.

#### 2.2 	Product Functions

·        Users will be able to log into a unique account containing their personal information

·        Users will be able to post a description of their employee benefit (EB) onto a public board

·        Users will be able to see a list of EBs posted by other users

·        Users will be able to select existing EBs that they find desirable

·        If two users find each other’s EBs desirable, these two users will be prompted to contact each other to negotiate the use of their EBs

·        Users will be able to see a list of previous matches

#### 2.3 	User Classes and Characteristics
 
The general user class that will use this product is users employed at a company which allows them to use an EB. Since there will be one general user class, all users will be equally important.

#### 2.4 	Operating Environment

The software will run on a Linux server capable of running the Node.js, NPM, and MySQL packages.

#### 2.5 	Design and Implementation Constraints
 
User login information will be stored securely. If the application scales to the point where a single database server is not sufficient, more complicated database systems will be necessary.

#### 2.6 	User Documentation

Upon initial use, users will be given instructions on proper use of the application. Additionally, there will be a help page on the website which will contain a more detailed explanation of the service.

#### 2.7 	Assumptions and Dependencies
 
One assumption about the application is that it will usually be used on a web browser. If the user opens the application on a mobile device, there may be scenarios where the device will not have enough hardware resources to run the application as intended.

Another assumption is that the domain and the hosting server for the website will always be running.
****
### 3. 	External Interface Requirements
#### 3.1 	User Interfaces
 
Users will be presented with a minimalist HTML using elements such as buttons, text areas, labels, and standard text in order to orient themselves and navigate the site.

#### 3.2 	Hardware Interfaces
 
Users will interact with the application through any device which can support a web browser, on which the application will be displayed.

#### 3.3 	Software Interfaces
 
The application will use a Maria DB database on the same server in order to store user data. This will run on Fedora Linux v24.

#### 3.4 	Communications Interfaces
 
The HTTP communication standard HTTP will be implemented.
****
### 4. 	System Features
#### 4.1     Account Creation

###### 4.1.1 	Description and Priority
 
New users will create a unique account to which their personal information will be stored. This will be a high priority feature.
 
###### 4.1.2 	Stimulus/Response Sequences
 
The stimulus will be a new user choosing to create an account. The system will respond by creating a new account if the user provides valid information. New users must provide valid input or else an error message will alert the new user.

###### 4.1.3 	Functional Requirements
 
REQ-1:	The system will validate the user input and create and save an account to the database.

REQ-2:	The user will be logged in and redirected to a help page.

#### 4.2 	Logging Into An Account
###### 4.2.1 	Description and Priority
 
Users will be able to enter their login information to access their unique user accounts. Logging into an account will be a high priority since the user cannot use the website if no account was made. 
 
###### 4.2.2 	Stimulus/Response Sequences
 
The stimulus will be a user accessing the website on any web browser. The system will respond by logging the user into their account if the user inputs their login information. In the case that the user cannot remember their login information, the system will ask the user if he/she wishes to create another account or answer his/her security question to log into their account. If the user chooses the security question, answer it correctly, and logs into his/her account, the system will ask the user to change their password.

###### 4.2.3 	Functional Requirements

REQ-1:	The system will validate the user input.

REQ-2: An error message will alert the user if the input was invalid. Otherwise, the user will be logged in and redirected to their homepage.

REQ-3:	If the error continues to occur, the user has the option to create another account or answer his/her security question to log back into his/her account.

REQ-4: If the user chooses to answer his/her security question, the system will show the question and the user must answer it as the way he/she answered it the same way as when he/she created the account.

REQ-5: If the answer is correct, the system will log the user into his/her account and ask the user to change their password. If not, an error message will alert the user.

#### 4.3     Posting An Employee Benefit
###### 4.3.1 	Description and Priority

Users will be able to post a description of their EB to a public board. The public board is a list which all of BWF's users can see other users' EBs. This is a medium priority feature since the user can choose to not post an EB.
 
###### 4.3.2 	Stimulus/Response Sequences
 
The stimulus will be a user choosing to post a description of their EB. The response will be the creation of a text field for the user to write a description of their EB with an option to submit. An error message will alert the user if invalid input was detected.

###### 4.3.3 	Functional Requirements
 
REQ-1:	The system will create a text field for the description of the EB to be written.

REQ-2:	The user will be allowed to post the description when finished, or cancel the process before submission. An error message will occur if the user input invalid information.

REQ-3:	The system will post the description of the user’s EB for other users to see.

#### 4.4     Selecting A Desired EB
###### 4.4.1 	Description and Priority

Users will be able to select EBs which they find desirable. This feature is medium priority because the user can choose to not select any EBs.
 
###### 4.4.2 	Stimulus/Response Sequences
 
The stimulus will be a user selecting a desirable EB from the public board. The system will respond by keeping track of the EBs selected by the user. The EBs will be saved into a list for the user to track what they desire.

###### 4.4.3 	Functional Requirements
 
REQ-1:	The system will allow the user to select one or more desirable EBs.

REQ-2:	The EB will be marked in some way to distinguish selected EBs from the public list.

REQ-3:	The system will keep track of the user’s selected EBs.

REQ-4:	Selected EBs from the user will be saved into a list for easy access.

#### 4.5     Interacting With A Matched User
###### 4.5.1 	Description and Priority
 
Users who select each other’s EBs will be prompted to contact each other to negotiate the use of the EBs in real life.
 
###### 4.5.2 	Stimulus/Response Sequences
 
The stimulus will be two users who have selected each other’s EBs. The system will respond by prompting the two users to negotiate, either through existing channels such as email, or through an integrated chat system.

###### 4.5.3 	Functional Requirements
 
REQ-1:	The system will detect when two users like each other’s EBs.

REQ-2:	The users will receive a notification informing them of a match.

REQ-3:	The users will be prompted to contact each other.

#### 4.6     Deleting an EB
###### 4.6.1 	Description and Priority
 
For whatever reason the user has, the user has the option of deleting their EB whenever he/she wants to. This option is only available if the user has added/posted an EB. If there are no EB posted by the user, an error message will alert the user that he/she cannot delete a nonexisting EB. This will be a medium priority feature because it's an optional choice for the user if he/she wants to delete an EB.
 
###### 4.6.2 	Stimulus/Response Sequences

After the user posts an EB, there will be an option if the user wants to delete the EB. The user can delete the EB for whatever reason he/she has. If the user decides to delete an EB, the system will ask the user to confirm if he/she truly wishes to delete the EB. If the user chooses yes, the EB will be deleted. If not, the EB will not be deleted.

###### 4.6.3 	Functional Requirements
 
REQ-1:	The user chooses to delete his/her EB.

REQ-2: If no EB was posted in the first place, an error message will alert the user.

REQ-3:	The user must confirm whether he/she wants to delete the EB.

REQ-4:	If yes, EB is deleted. If no, EB stays.

#### 4.7     Updating an EB
###### 4.7.1 	Description and Priority
 
The user will be update his/her EB after posting it. The user will be able to update whatever information he/she believes is necessary. Deleting an EB is also a part of updating an EB. An error message will alert the user if the user tries to add invalid input or if the user did not post an EB in the first place. Otherwise, the system will ask the user to confirm the update. This will be a medium priority because it's an optional choice for he user if he/she wants to update an EB.
 
###### 4.7.2 	Stimulus/Response Sequences

After the user posts an EB, there will be an option for the user to update an EB. If the user chooses to update an EB, the system will show the EB as it would when creating an EB. The user will change whatever information on the EB and the information must be valid input or an error message will alert the user. Once the user chooses to update his/her EB, the system will ask the user to confirm their change. If the user chooses yes, the EB will be updated. If not, the update will be cancelled.

###### 4.7.3 	Functional Requirements
 
REQ-1:	The user chooses to update his/her EB.

REQ-2:	If no EB was posted in the first place, an error message will alert the user. Otherwise, the system will show the EB and its information.

REQ-3:	The user changes information of the EB and wishes to update the EB by choosing the update button.

REQ-4: An error message will alert the user if invalid input was detected. Otherwise, the system will ask the user to confirm their choice.

REQ-5: If the user chooses yes, the EB is updated. If not, the EB doesn't change.

****
### 5.     Other Nonfunctional Requirements
#### 5.1     Performance Requirements
 
The website should load in less than 10 seconds.

#### 5.2 	Safety Requirements

The main safety requirement will be the app’s legality and vulnerability to legal action taken by employers. To accomplish this, careful examination of legal code must be done before the release of the product to assure that no laws are broken by use of the service. In addition, individual employers will have their own set of regulations on employee benefits, which may result in users facing punishment  for using the app. To combat this, examination of industry standards on employee benefits must be done, as well as users being given a disclaimer on the subject before Account Creation is finished.
 
#### 5.3 	Security Requirements
 
User information will not be visible to other users. Passwords will be encrypted.

#### 5.4 	Software Quality Attributes
 
Usability will be a top concern, as having an easy-to-use service will allow for the user base to expand quickly. Scalability will also be a concern, as a larger user base will decrease the usability of the website  by making it more difficult to match.

#### 5.5 	Business Rules

Before Account Creation is completed, users will be presented with a Terms and Conditions document stating that BWF is not responsible for negative consequences of using the app.
****
### 6. 	Other Requirements
Appendix A: Glossary

· BWF – Benefits With Friends

· EB – Employee Benefits

Appendix B: Analysis Models

Appendix C: To Be Determined List

1. The method for users to contact each other


