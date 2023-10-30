

const inquirer = require('inquirer');
const db = require('./config/connections')


// Menu questions
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
        let choice = res.choices;
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

// function to get view of all departments
const viewAllDepartments = () => {
    let sql = `SELECT * FROM department`;
     db.query(sql, (error, response) => {
         if (error) {
             return console.error(error);
         } else {
             console.log('List of departments');
             console.table(response);
             menu();
         };
     });
  };

  // View all roles
  const viewAllRoles = () => {
    let sql = `SELECT * FROM role`;
     db.query(sql, (error, response) => {
         if (error) {
             return console.error(error);
         } else {
             console.log('List of role');
             console.table(response);
             menu();
         };
     });
  };

  // View all employees
  const viewAllEmployees = () => {
    let sql = `SELECT * FROM employee`;
     db.query(sql, (error, response) => {
         if (error) {
             return console.error(error);
         } else {
             console.log('List of employees');
             console.table(response);
             menu();
         };
     });
  };

  // Add a department
  const addADepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the department you would like to add?'
        }
    ]).then((res) => {
        let sql = `INSERT INTO department(name) VALUES (?)`;
     db.query(sql, [res.name], (error, response) => {
         if (error) {
             return console.error(error);
         } else {
             console.log('Successfully added department!')
             menu();
         };
     });
    })
  }

  // Add a role
  const addARole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the role you would like to add?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary for the role you would like to add?'
        },
        {
            type: 'input',
            name: 'dept_id',
            message: 'What is the department id of the role you would like to add?'
        }

    ]).then((res) => {
        let sql = `INSERT INTO role(title, salary, dept_id) VALUES (?, ?, ?)`;
     db.query(sql, [res.title, res.salary, res.dept_id], (error, response) => {
         if (error) {
             return console.error(error);
         } else {
             console.log('Successfully added role!')
             menu();
         };
     });
    })
  }

// Add an employee
  const addAnEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'What is the first name of the employee you would like to add?'
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'What is the lasat name of the employee you would like to add?'
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'What is the role id of the employee you would like to add?'
        },
        {
            type: 'input',
            name: 'manager_id',
            message: 'What is the manager id of the employee you would like to add?'
        }
    ]).then((res) => {
        let sql = `INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
     db.query(sql, [res.first_name, res.last_name, res.role_id, res.manager_id], (error, response) => {
         if (error) {
             return console.error(error);
         } else {
             console.log('Successfully added employee!')
             menu();
         };
     });
    })
  };
 
  // Update employee role
  const updateAnEmployeeRole = () => {
    let sql = `SELECT * FROM employee`;
     db.query(sql, (error, response) => {
         if (error) {
             return console.error(error);
         } else {

            console.log(response)

            const employeeArr = response.map(e => {
                return {
                    name: e.first_name + " " + e.last_name,
                    value: e.id
                }
            });
            console.log(employeeArr)
             
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'employee_id',
                    message: 'Which employee you would like to update?',
                    choices: employeeArr
                },
                {
                    type: 'input',
                    name: 'role_id',
                    message: 'What is the new role id for the employee you would like to update?'
                }
            ]).then((res) => {
                let sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
             db.query(sql, [res.role_id, res.employee_id], (error, response) => {
                 if (error) {
                     return console.error(error);
                 } else {
                     console.log('Successfully updated role!')
                     menu();
                 };
             });
            })
         };
     });
  };


 menu();

 