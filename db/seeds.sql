INSERT INTO department (id, name)
VALUES (1, "Service"),
       (2, "Sales"),
       (3, "Finance");

INSERT INTO role (id, title, salary, dept_id)
VALUES (1, "Customer Service", 100000, 1),
       (2, "Salesperson", 120000, 2),
       (3, "Account Manager", 130000, 3),
       (4, "Sales Manager", 150000, 2),
       (5, "Service Manager", 150000, 1),
       (6, "Area Manager", 175000, 3);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Brandi", "Carlile", 2, 4),
       ("Phil", "Hanseroth", 2, 4),
       ("Tim", "Hanseroth", 1, 5),
       ("Catherine", "Shepard", 1, 5),
       ("Josh", "Neumann", 3, 6);

