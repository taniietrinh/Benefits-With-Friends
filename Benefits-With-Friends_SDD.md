# Benefits With Friends
# Software Design Document
# Version 1.0
# Prepared by Jose Hernandez, Tuyet-Ngoc Le, Felipe Ronderos, Thanh Trinh, Jerahmeel Wilson

### 1. Introduction

#### 1.1 Purpose

The purpose of the Software Design Document is to give a detailed description of the software design and organization for Benefits With Friends (BWF). The Software Design Document is intended to let all the stakeholders understand the design of the application as a whole.

#### 1.2 Intended Audience

The intended audience for BWF is low-level service industry workers whose jobs provide Employee Benefits (EB). The application is intended for audiences between the age of 16-25.

#### 1.3 Scope  
    
This Software Design Document is intended to provide a detailed overview of the system architecture of the BWF app and service.

#### 1.4 Overview

### 2. Main system architecture (Logical view)

#### 2.1 Complete System Overview 

![Complete System Overview](https://i.gyazo.com/508a26d755c0340b19c0973b338e2757.png)

The first major layer is the Benefits With Friends Application layer. This layer will respond to user inputs and display EBs. The second major layer is the Messaging System layer. This is responsible for connecting users in preparation for instant messaging. (I can’t think of a way to say this) The last major layer of Benefits With Friends is the User Database. This layer store and update the user’s account names and password.

#### 2.2 Application Use Case

![Application Use Case](https://i.gyazo.com/1dacec0c18cb8fac9907447719e5706d.png)

From the user’s point of view, there are three actions which can be taken. These are adding an EB, deleting an EB and selecting an EB. If an EB is added or deleted, the main Benefits With Friend Application page will be updated and it will display the newly added EB. If two users selected an EB from one another then they have a choice to message the other.

### 3. Sub-systems architecture   

#### 3.1 Account Creation System
    
An account component will take in a username and a password from the user and store it to the database. 

#### 3.2 Messaging System

If two users save each other’s EB to their PLs, the users will be prompted to directly message each other to negotiate the real-life use of their EBs.

#### 3.3 Main Application

### 4. Rationale for each architectural choice

#### 4.1 Rationale for Structure of Account Creation System

Before creating an account or using the application, BWF first needs a database in order to hold and secure potential user information and their EBs.

#### 4.2 Rationale for Structure of Account Creation System

BWF requires to have a system of creating an account because it involves a user posting their personal information for all users to see. This provides security. The structure of this system is also dependent on the Database System because it needs the database to hold and store information from the users.

#### 4.3 Rationale for Structure of Main Application

    The Main Application of BWF is dependent on the Account Creation System because without an account, potential users cannot have access to the Main Application. Users will be required to add their own EB to the public list before selecting others to ensure that all users are contributing to the average quality of EBs.
   
### 5. Development view

![Development view](https://i.gyazo.com/2b4e49ab57b6b7ced8daace16e3f3c51.png)

The project for Benefits With Friends will be build with [name of IDE]. The directory structure of the project files are shown below.

### 6. Physical view

![Physical view](https://i.gyazo.com/ebebf93f6890071cba7245d782be771c.png)

The physical view of the application process would only need the standard keyboard, mouse, and monitor. There must be access to the Internet since the application will be a website.

### 7. Database view

![Database view](https://i.gyazo.com/62a973b7ff48915ba64a6a0dbe19e930.png)

### 8. Work-assignment view

All coding will be done by Felipe Ronderos while Jose Hernandez, Tuyet-Le Ngoc, Thanh Trinh, and Jerahmeel Wilson will work on documentation.

### 9. Element catalog

![Element Catalog](https://i.gyazo.com/e8242568d81d0d5b6429d8b6dc889432.png)

### 10. User interfaces

#### 10.1 User Interfaces Description
#### 10.2 Main menu

![BWF Main menu](https://i.gyazo.com/2d1fc400e2a2b1fdcee33ed24359444e.png)

#### 10.3 User Info

![User Info](https://i.gyazo.com/28e55a3a050fe26600d49c06a7d526e5.png)

#### 10.4 Add/Update EB

![Add/Update EB](https://i.gyazo.com/ffbf3cf1e85b8c5e8c647b1b18b1b329.png)

#### 10.5 Delete EB

![Delete EB](https://i.gyazo.com/c2e3235cbedce87d3a9109a294c768af.png)
