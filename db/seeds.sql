INSERT INTO department (name)
VALUES ("Service"),
       ("Sales"),
       ("Finance");

INSERT INTO role (title, salary, dept_id)
VALUES ("Customer Service", 100000, 1),
       ("Salesperson", 120000, 2),
       ("Account Manager", 130000, 3),
       ("Sales Manager", 150000, 2),
       ("Service Manager", 150000, 1),
       ("Area Manager", 175000, 3);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Brandi", "Carlile", 4, NULL),
       ("Phil", "Hanseroth", 2, 4),
       ("Tim", "Hanseroth", 1, 5),
       ("Catherine", "Shepard", 5, NULL),
       ("Josh", "Neumann", 3, 6),
       ("Allison", "Russell", 6, NULL);

