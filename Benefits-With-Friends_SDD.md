# Benefits With Friends
# Software Design Document
# Version 1.0
# Prepared by Jose Hernandez, Tuyet-Ngoc Le, Felipe Ronderos, Thanh Trinh, Jerahmeel Wilson

### 1. Introduction

#### 1.1 Purpose

The purpose of the Software Design Document is to give a detailed description of the software design and organization for Benefits With Friends (BWF). The Software Design Document is intended to let all the stakeholders understand the design of the application as a whole.

#### 1.2 Intended Audience

The intended audience for BWF is low-level service industry workers at the age 18 years or older whose jobs provide Employee Benefits (EB). The intended audience of the software requirement document includes the developer's and other potential stakeholders such as investors, consultations, and clients. Section 2 is aimed towards developers by providing a complete system overview of how BWF will be implemented. 

#### 1.3 Scope  
    
This Software Design Document is intended to provide a detailed overview of the system architecture of the BWF app and service.

#### 1.4 Overview

Users of BWF will experience unique website that is easy to use, quick, and customizable. This document will explain how the account creation system and user database system will work together, as well as how to properly use the application. BWF will be based off of object oriented architecture. 
****
### 2. Main system architecture (Logical view)

#### 2.1 Complete System Overview 

![Complete System Overview](https://i.gyazo.com/508a26d755c0340b19c0973b338e2757.png)

The first major layer is the Benefits With Friends Application layer. This layer will respond to user inputs and display EBs. The second major layer is the Graphical User Interface. This layer is responsible for generating everything the user can see, such as updating the viewpoint. The last major layer of Benefits With Friends is the Database. This layer is accountable for storing and updating the usernames and passwords as well as the EBs.

#### 2.2 Application Use Case

![Application Use Case](https://i.gyazo.com/0040077cf4a1abc8d283621928ca1e2e.png)

The Application Use Case assumes that the user already created an account. From the user’s point of view, there are three actions which can be taken. These are adding an EB, deleting an EB and selecting an EB. If an EB is added, the main Benefits With Friend Application page will be updated and it will display the newly added EB. If an EB is deleted, the BWF application page will remove the EB from the EB list. In order to select an EB, the user must have already added an EB. If two users select an EB from one another, then they have a choice to contact the other, which is labeled as User Interaction in the above diagram. User Interaction can occur if and only if two users select each other’s EB. User Interactions are limited to both users agreeing to share the email addresses used in the creation of their accounts. There will not be an internal messaging system. In order to update an EB, the user will be prompted to delete their current EB listing and then add a new EB.

****
### 3. Sub-systems architecture   

#### 3.1 Database System

This system will be used to store users' information and their EBs.

#### 3.2 Database System

An account component will take in a username, password and email from the user and store it to the database. This system is dependent on the Database System. 

#### 3.3 User Interaction System

The user interaction system will allow users to swap emails once they have matched by selecting each other’s EB. Once two users have matched, they sent notification asking for confirmation to share emails. Once the two users have accepted, they will be sent each others emails.

#### 3.4 Main Application

![Behavioral/Component View](https://i.gyazo.com/92ea635c0aeaf419f31d1a87025ff0e7.png)

The Main Application shows how the Database, Account Creation, and User Interaction systems  interact with each other. First, the Main Application will lead the user to the Account Creation system; this account and user information will be stored in the Database system. When the user creates and posts an EB, the EB will also be stored in the Database system. When two users select each other’s EBs, this will lead to the User Interaction system where the system will prompt the two users to interact with each other by email.

****
### 4. Rationale for each architectural choice

#### 4.1 Rationale for Structure of Account Creation System

Before creating an account or using the application, BWF first needs a database in order to hold and secure potential user information and their EBs.

#### 4.2 Rationale for Structure of Account Creation System

BWF requires to have a system of creating an account because it involves a user posting their personal information for all users to see. This provides security. The structure of this system is also dependent on the Database System because it needs the database to hold and store information from the users.

#### 4.3 Rationale for Structure of User Interaction System

The User Interaction system will allow users swap emails once they have matched. This system is integral to the BWF application because it allows users to communicate. The rationale of only allowing users to exchange emails will help distance BWF from legality problems by not letting users communicate on the BWF website. This system will be dependent upon the database system to access emails and the account creation system to add emails to the database. 

#### 4.4 Rationale for Structure of Main Application

The Main Application of BWF is dependent on the Account Creation System because without an account, potential users cannot have access to the Main Application. Users will be required to add their own EB to the public list before selecting others to ensure that all users are contributing to the average quality of EBs.
****
### 5. Development view

![Development view](https://i.gyazo.com/2b4e49ab57b6b7ced8daace16e3f3c51.png)

The project for Benefits With Friends will be build with SublimeText. The directory structure of the project files are shown above. Source code files will be included within the directory System, Account and Employee-Benefits.
****
### 6. Physical view

![Physical view](https://i.gyazo.com/ebebf93f6890071cba7245d782be771c.png)
****
### 7. Database view

![Database view](https://i.gyazo.com/62a973b7ff48915ba64a6a0dbe19e930.png)
****
### 8. Work-assignment view

Our team’s assignment are as followed:

User Interface Design & Front-End Development: Jose Hernandez, Tuyet-Ngoc Le, Thanh Trinh and Jerahmeel Wilson
Application Development & Database Management: Felipe Ronderos
****
### 9. Element catalog

![Element Catalog](https://i.gyazo.com/e8242568d81d0d5b6429d8b6dc889432.png)
****
### 10. User interfaces

#### 10.1 User Interfaces Description

All UI will be designed for ease of use. When first using the application, users will be required to create a unique account using an email address, a username and a password. After which, the users will be redirected to their account information page. Users will then be prompted to submit information on their EB. Once this is done, users will be able to view the main list of EBs. Users will then be able to select preferred EBs from the list. In the event that two users’ EBs are matched, they will both receive a notification and be prompted to communicate through email.
    
#### 10.2 Main menu

![BWF Main menu](https://i.gyazo.com/2d1fc400e2a2b1fdcee33ed24359444e.png)

Main menu shows the public board of all EBs posted by users of BWF.

#### 10.3 User Info

![User Info](https://i.gyazo.com/28e55a3a050fe26600d49c06a7d526e5.png)

User Info shows the user's EB(s) if the user posted any. It also shows the Add EB, Update EB, and Delete EB features.

#### 10.4 Add/Update EB

![Add/Update EB](https://i.gyazo.com/ffbf3cf1e85b8c5e8c647b1b18b1b329.png)

This screen shows what it would look like when the user adds an EB. The user must provide valid input, where the EB comes from and what the EB provides.

#### 10.5 Delete EB

![Delete EB](https://i.gyazo.com/c2e3235cbedce87d3a9109a294c768af.png)

This screen shows what it would look like when the user tries to delete an EB. It shows the EB that the user wants to delete.
