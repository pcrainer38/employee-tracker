const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const sequelize = require('./config/connections')


const app = express();
const PORT = process.env.PORT || 3001;

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use((req, res) => {
    res.status(404).end();
});

const menu = () => {
inquirer.prompt ([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'choices',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'Exit'
            ]
        }
    
    ]).then (res => {
        let choice = res;
        switch (choice) {
            case 'View all departments':
                viewAllDepartments();
                break;              
            case 'View all roles':
                viewAllRoles();
                break;
            case 'View all employees':
                viewAllEmployees();
                break;
            case 'Add a department':
                addADepartment();
                break;
            case 'Add a role':
                addARole();
                break;
            case 'Add an employee':
                addAnEmployee();
                break;
            case 'Update an employee role':
                updateAnEmployeeRole();
                break;
            default:
                return 'Thank you for use the Employee Tracker!';
        };
    });
};

const viewAllDepartments = () => {
    let sql = `SELECT * FROM department`;
     sequelize.query(sql, (error, response) => {
         if (error) {
             return console.error(error);
         } else {
             console.log('List of departments');
             console.table(response);
             menu();
         };
     });
  };
 

 menu();

 sequelize.sync().then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
