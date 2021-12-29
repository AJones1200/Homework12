require("console.table")
const inquirer = require("inquirer");
const mysql = require('mysql2');
// const { listenerCount } = require("mysql2/typings/mysql/lib/Connection");

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: 'Password1',
        database: 'office_db'
    },
    console.log(`Connected to the classlist_db database.`)
);

function init() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'initialQuestion',
                message: 'What would you like to do?',
                choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
            }

        ]).then(function (answers) {
            console.log(answers)
            switch (answers.initialQuestion) {
                case "View All Employees":
                    viewAllEmployees()
                    break;
                case "Add Employee":
                    addEmployee()
                    break;
                case "Update Employee Role":
                    updateEmployeeRole()
                    break;
                case "View All Roles":
                    viewAllRoles()
                    break;
                case "Add Role":
                    addRole()
                    break;
                case "View All Departments":
                    viewAllDepts()
                    break;
                case "Add Department":
                    addDept()
                    break;
                case "Quit":
                    return
            }
        })
}


init()
class Database {
    // create connection to database and sql queries
}
async function viewAllEmployees() {
    // get route to get all employees
    const employees = await db.promise().query('SELECT * FROM employee')
    console.table(employees[0])

    init()

}

async function viewAllRoles() {

    const roles = await db.promise().query('SELECT * FROM role')
    console.table(roles[0])

    init()

}

async function viewAllDepts() {
   
    const departments = await db.promise().query('SELECT * FROM department')
    console.table(departments[0])

    init()
}

function addEmployee() {
    inquirer.prompt([{
        type: 'input',
        name: 'first_name',
        message: 'Please enter first name of the employee.',

    },

    {
        type: 'input',
        name: 'last_name',
        message: 'Please enter last name of the employee.',
    },

    {
        type: 'input',
        name: 'role_id',
        message: 'Please enter role of the employee.',
    },

    {
        type: 'input',
        name: 'manager_id',
        message: 'Please enter manager of the employee.',
    }]).then(function (answers) {
        console.log(answers)
        db.promise().query('INSERT INTO employee SET ?', answers);
        init()
    })
}

function addRole() {
    inquirer.prompt([{
        type: 'input',
        name: 'title',
        message: 'Please enter name of the role.',
    },
    {
        type: 'input',
        name: 'salary',
        message: 'Please enter salary of this role.',
    },

    {
        type: 'input',
        name: 'department_id',
        message: 'Please enter department of this role.',
    }]).then(function (answers) {
        console.log(answers)
        db.promise().query('INSERT INTO role SET ?', answers);
        init()
    })
}

function addDept() {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'Please enter name of the department.',
    }]).then(function (answers) {
        console.log(answers)

        db.promise().query('INSERT INTO department SET ?', answers);
        init()
    })
}

async function updateEmployeeRole() {
    const employees = await db.promise().query('SELECT employee.id, employee.first_name, employee.last_name FROM employee')
    const choices = employees[0].map(employee => {
        return {name: employee.first_name + ' ' + employee.last_name, value: employee.id}
    })
    const roles = await db.promise().query('SELECT role.id, role.title FROM role')
    const roleChoices = roles[0].map(role => {
        return {name: role.title, value: role.id}
    })
    inquirer.prompt([
        {
            type: 'list',
            name: 'chosenEmployee',
            message: 'Choose an employee to update',
            choices: choices,

        },
        {
            type: 'list',
            name: 'chosenRole',
            message: 'Choose new role',
            choices: roleChoices,

        }
    ]).then(function (answers) {
        console.log(answers)
        db.promise().query('UPDATE employee SET role_id = ? WHERE id = ?', [answers.chosenRole, answers.chosenEmployee]);

        init();
    })
}