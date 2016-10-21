# Software Requirements Specification for Benefits With Friends
# Version 1.0
# Prepared by Jose Hernandez, Tuyet-Ngoc Le, Felipe Ronderos, Thanh Trinh, Jerahmeel Wilson


### 1. 	Introduction

#### 1.1 	Purpose

The purpose of this document is to give a detailed description of the requirements for Benefits With Friends. It will describe the purpose and development of the system. This document will also explain the constraints and interface. Since Benefits With Friends will be a new product, this document will be used as a reference to developing the first version of the system.

#### 1.2 	Document Conventions

All typographic conventions in the document are the default conventions of this document. Every requirement is expected to be high or medium priority.

#### 1.3 	Intended Audience and Reading Suggestions

The intended audience for this document is the TA for Nash Mahmoud’s CSC4330 class and Dr. Nash. The SRS document contains a description of the systems which make up the Benefits With Friends service. 

#### 1.4 	Product Scope

Benefits With Friends is a web-based service which allows users to use each other’s employee benefits. The corporate goal of this service is to allow employees of low-earning jobs to maximize the benefits offered by their employers. The product will be free and accessed by any web browser. Also, the product needs Internet in order to function and display results.

#### 1.5 	References

IEEE Std 830-1998 Recommended Practice for Software Requirements Specifications. IEEE Computer Society, 1998.

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

The software will run on a Linux server capable of running Node.js, NPM, and MySQL packages.

#### 2.5 	Design and Implementation Constraints
 
User login information will be stored securely. If the application scales to the point where a single database server is not sufficient, more complicated database systems will be necessary.

#### 2.6 	User Documentation

Upon initial use, users will be given instructions on proper use of the application. Additionally, there will be a help page on the website which will contain a more detailed explanation of the service.

#### 2.7 	Assumptions and Dependencies
 
The application will be dependent on the domain and hosting for the website.

### 3. 	External Interface Requirements
#### 3.1 	User Interfaces
 
Users will be presented with a minimalist HTML using elements such as buttons, text areas, labels, and standard text in order to orient themselves and navigate the site.

#### 3.2 	Hardware Interfaces
 
Users will interact with the application through any device which can support a web browser, on which the application will be displayed.

#### 3.3 	Software Interfaces
 
The application will use a Maria DB database on the same server in order to store user data. This will run on Fedora Linux v24.

#### 3.4 	Communications Interfaces
 
The HTTP communication standard HTTP will be implemented.

### 4. 	System Features
#### 4.1     Account Creation

###### 4.1.1 	Description and Priority
 
New users will create a unique account to which their personal information will be stored. This will be a high priority feature since it involves a security issue.
 
###### 4.1.2 	Stimulus/Response Sequences
 
The stimulus will be a new user choosing to create an account. The system will respond by creating a new account if the user provides valid information.

###### 4.1.3 	Functional Requirements
 
REQ-1:	The system will validate the user input and create and save an account to the database.

REQ-2:	The user will be logged in and redirected to a help page.

#### 4.2 	Logging Into An Account
###### 4.2.1 	Description and Priority
 
Users will be able to enter their login information to access their unique user accounts. Logging into an account will be a high priority since the user cannot use the website if no account was made.
 
###### 4.2.2 	Stimulus/Response Sequences
 
The stimulus will be a user accessing the website on any web browser. The system will respond by logging the user into their account if the user inputs their login information.

###### 4.2.3 	Functional Requirements

REQ-1:	The system will validate the user input.

REQ-2:	The user will be logged in and redirected to their homepage.

#### 4.3     Posting An Employee Benefit
###### 4.3.1 	Description and Priority

Users will be able to post a description of their EB to a public board. This is a medium priority feature since the user can choose to not post an EB.
 
###### 4.3.2 	Stimulus/Response Sequences
 
The stimulus will be a user choosing to post a description of their EB. The response will be the creation of a text field for the user to write a description of their EB with an option to submit.

###### 4.3.3 	Functional Requirements
 
REQ-1:	The system will create a text field for the description of the EB to be written.

REQ-2:	The user will be allowed to post the description when finished, or cancel the process before submission.

REQ-3:	The system will post the description of the user’s EB for other users to see.

#### 4.4     Selecting A Desired Benefit
###### 4.4.1 	Description and Priority

Users will be able to select EBs which they find desirable. This feature is medium priority because the user can choose to not select any EBs.
 
###### 4.4.2 	Stimulus/Response Sequences
 
The stimulus will be a user selecting a desirable EB from a public board. The system will respond by keeping track of the EBs selected by the user. The EBs will be saved into a list for the user to track what they desire.

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
 
### 5.     Other Nonfunctional Requirements
#### 5.1     Performance Requirements
 
The website should load in less than 10 seconds.

#### 5.2 	Safety Requirements

The main safety requirement will be the app’s legality and vulnerability to legal action taken by employers. To accomplish this, careful examination of legal code must be done before the release of the product to assure that no laws are broken by use of the service. In addition, individual employers will have their own set of regulations on employee benefits, which may result in users facing punishment  for using the app. To combat this, examination of industry standards on employee benefits must be done, as well as users being given a disclaimer on the subject before Account Creation is finished.
 
#### 5.3 	Security Requirements
 
User information will not be visible to other users. The login and password feature will keep user information encrypted.

#### 5.4 	Software Quality Attributes
 
Usability will be a top concern, as having an easy-to-use service will allow for the user base to expand quickly. Scalability will also be a concern, as a larger user base will decrease the usability of the website  by making it more difficult to match.

#### 5.5 	Business Rules

Before Account Creation is completed, users will be presented with a Terms and Conditions document stating that BWF is not responsible for negative consequences of using the app.

### 6. 	Other Requirements
Appendix A: Glossary

· BWF – Benefits With Friends

· EB – Employee Benefits

Appendix B: Analysis Models

Appendix C: To Be Determined List

1. The method for users to contact each other


