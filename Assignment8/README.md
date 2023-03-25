
# Assignment 8

- Name: Shiva Kranthi Maddhuri
- NUID: 002709860
- Email: maddhuri.s@northeastern.edu

## Topic: Assignment 8 (Node, Express & MongoDB)
Assignment 8 based on user authentication, CRUD operations involving storing password to MongoDB using encryption.

## API Endpoints:

1. POST - /user/create \
Desc: To create a new user and store it to the database with salt/hashed password using brcypt and validations for password creation. Validation errors for password. \
Parameters: a. email 
            b. password 
            c. full name 

2. POST - /user/edit \
Desc: To update user's fullname or password on logging in. Validations for correct email or password. \
Parameters: a. email
            b. new_password 
            c. new_fullname

3. DELETE - /user/delete \
Desc: Delete the user by using Delete request.

4. GET - /user/getAll \
Desc: Get all the users email addresses, full name and passwords (encrypted) from the database.

## Technology & Softwares:

1. MongoDB
2. Express
3. NodeJS

Commonly used packages:
1. bcrypt
2. mongoose
3. express
4. nodemon

## Installation:

Running the server
1. Clone the repository on your local machine
2. Install the packages by running the command *npm install* (at the root of the directory)
3. Run the app by running the command *npm start*

* Use postman to test the API endpoints
* Install MongoDB community edition server and create a local database
