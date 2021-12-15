const inquirer = require("inquirer");

function init() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'initialQuestion',
                message: 'What would you like to do?',
                choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
            },

            {
                type: 'input',
                name: 'departmentName',
                message: 'Please enter name of the department.',
                when: (answers) => {
                    answers.initialQuestion === 'Add Department'
                }
            },

            {
                type: 'input',
                name: 'roleName',
                message: 'Please enter name of the role.',
                when: (answers) => {
                    answers.initialQuestion === 'Add Role'
                }
            },

            {
                type: 'input',
                name: 'roleSalary',
                message: 'Please enter salary of this role.',
                when: (answers) => {
                    answers.initialQuestion === 'Add Role'
                }
            },

            {
                type: 'input',
                name: 'roleDepartment',
                message: 'Please enter department of this role.',
                when: (answers) => {
                    answers.initialQuestion === 'Add Role'
                }
            },

            {
                type: 'input',
                name: 'employeeFirstName',
                message: 'Please enter first name of the employee.',
                when: (answers) => {
                    answers.initialQuestion === 'Add Employee'
                }
            },

            {
                type: 'input',
                name: 'employeeLastName',
                message: 'Please enter last name of the department.',
                when: (answers) => {
                    answers.initialQuestion === 'Add Employee'
                }
            },

            {
                type: 'input',
                name: 'employeeRole',
                message: 'Please enter role of the employee.',
                when: (answers) => {
                    answers.initialQuestion === 'Add Employee'
                }
            },

            {
                type: 'input',
                name: 'employeeManager',
                message: 'Please enter manager of the employee.',
                when: (answers) => {
                    answers.initialQuestion === 'Add Employee'
                }
            },

            {
                type: 'list',
                name: 'updateEmployeeRole',
                message: 'Which employee role would you like to update?',
                choices: [],
                when: (answers) => {
                    answers.initialQuestion === 'Update Employee Role'
                }
            },
            
        ])
}