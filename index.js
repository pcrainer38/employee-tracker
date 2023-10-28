const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const questions = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'action',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update and employee role',
            'Exit'
        ]
    }
];



