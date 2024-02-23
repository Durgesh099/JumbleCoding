let code = 
[
    { id: 1, title: `INSERT INTO student_table (name, roll_no, class, city)
VALUES ('Harsh', 19001, 'Class A', 'New York');` },
{ id: 2, title: `INSERT INTO student_table (name, roll_no, class, city)
VALUES ('Vaibhav', 19081, 'Class A', 'Paris');` },
{ id: 3, title: `SELECT * FROM student_table;` },
{ id: 4, title:`INSERT INTO student_table (name, roll_no, class, city)
VALUES ('Aditya',29031 , 'Class B', 'New York');`},
{ id: 5, title: `INSERT INTO student_table (name, roll_no, class, city)
VALUES ('Aditya', 39061, 'Class C', 'Tokyo');`},
    { id: 6, title: `CREATE TABLE student_table (name VARCHAR2(50),roll_no NUMBER,class VARCHAR2(20),city VARCHAR2(50));` },
    { id: 7, title: `INSERT INTO student_table (name, roll_no, class, city)
VALUES ('Durgesh', 29005, 'Class B', 'London');` }
]

export default code;