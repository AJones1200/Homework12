# Homework12

This assignment's function is to create a dropdown menu in the terminal, 
from which the user will be able to select the options to add employees, roles and departments. 
The user also has the option to update employees' roles, and view employees, roles and departments.

I created all the files necessary for this project, including a db folder, index, gitignore, and packagejson.
I created queries, schema and seeds files within the db folder. 
I inserted the inquirer and mysql packages in the index.js file in order to connect everything. 
I created a variable and entered the user and password information necessary to connect.
I created the init function to create the initial prompt of "What would you like to do?" in the terminal.
I created a .then function with the switch keyword in order to display the options. 
I created the next init function to connect to the database and sql queries. 
I created an async function to get the route to all employees, roles and departments.
I created functions with .then statements to input all employee (first name, last name, etc.), role (title, salary, etc.) and department (dept name) information. 
I created a function with a .then statement to update the employee's role.
I then called an init function.  
