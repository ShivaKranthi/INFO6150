# Assignment-9

- Name: Shiva Kranthi Maddhuri
- NUID: 002709860
- Email ID: maddhuri.s@northeastern.edu
- Prof. Vishal Chawla

## INFO 6150 Assignment9
Created pages using react components and react-router (Home, About-us, 
Jobs, Contact) and added a card component on each page giving detail about each page.

### Project aspects:

Created a backend folder for connecting to the mongodb and running the localhost on 5000 port and frontend folder to run the react app on localhost 8002 port

- Routers -> Routers are created for each operation which will go to the Controllers for respective opertions
- Controllers -> In Controllers, for each operation a different method is created with await and async handling to perform their respective operations on the mongodb
- Models -> In Model, The schema for the user table is defined and bcrypt of password also done before saving into the database
- Services -> In services all the process are defined 

- 4 Pages are created with relevant data in it using single component card for heading and printing the horizontal lines

- map() is used to fetch the data from file in about section.

- Added gitignore as mentioned in the requirements.


### `Login`

Created a login page. Used username and password created in assignment-8 to login 
successfully. 

### `Home`

Created home Page which contains the welcome headings.

### `About`

Created About Page which contains details about the page.

### `Jobs`

Created Jobs Page which contains details about the job. We can create Jobs dynamically, as used react map() to create dynamic component. 

### `Contact`

Created Contact Page which had details of contact on the card component.
