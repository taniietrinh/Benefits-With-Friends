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

The first major layer is the Benefits With Friends Application layer. This layer will respond to user inputs and display EBs. The second major layer is the Messaging System layer. This is responsible for connecting users in preparation for instant messaging. (I can’t think of a way to say this) The last major layer of Benefits With Friends is the User Database. This layer store and update the user’s account names and password.

#### 2.2 Application Use Case

From the user’s point of view, there are three actions which can be taken. These are adding an EB, deleting an EB and selecting an EB. If an EB is added or deleted, the main Benefits With Friend Application page will be updated and it will display the newly added EB. If two users selected an EB from one another then they have a choice to message the other.

### 3. Sub-systems architecture   

#### 3.1 Account Creation System
    
An account component will take in a username and a password from the user and store it to the database. 

#### 3.2 Messaging System

If two users save each other’s EB to their PLs, the users will be prompted to directly message each other to negotiate the real-life use of their EBs.

#### 3.3 Main Application

### 4. Rationale for each architectural choice

#### 4.1 Rationale for Structure of Account Creation System
#### 4.2 Rationale for Structure of Messaging System
#### 4.3 Rationale for Structure of Main Application
   
### 5. Development view

The project for Benefits With Friends will be build with [name of IDE]. The directory structure of the project files are shown below.

### 6. Physical view

The physical view of the application process would only need the standard keyboard, mouse, and monitor. There must be access to the Internet since the application will be a website.

### 7. Database view

### 8. Work-assignment view

All coding will be done by Felipe Ronderos while Jose Hernandez, Tuyet-Le Ngoc, Thanh Trinh, and Jerahmeel Wilson will work on documentation.

### 9. Element catalog

### 10. User interfaces //chart

#### 10.1 User Interfaces Description


