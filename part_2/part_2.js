/*

PART 2 [SQL Queries]:

Type the correct SQL query below every question:

Q1) What is the query for displaying all the databases?

use *;

Q2) What is the query for using a specific database?

use databaseName;

Q3) What is the query for creating a new database called `meraki`?

create meraki database;

Q4) What is the query for deleting a database called `meraki`?

DLELETE meraki ;

Q5) What is the query for displaying all the tables for a database called `meraki`?

USE meraki;
SELECT *;

Q6) What is the query for displaying the columns of a table called `users`?

SELECT * FROM users;

Q7) What is the query to insert information into a table called `users` that has four columns (name, email, password, age)?

INSERT INTO users (name, email, password, age) values ('exname', 'exemail', 'expassword', 15)

Q8) What is the query to update the `name` of a user that has `info@meraki-academy.org` as an email?

UPDATE name = 'newName' FROM users WHERE email = 'info@meraki-academy.org' ;

Q9) What is the query to delete a user that has `info@meraki-academy.org` as an email?

DROP COLUMN from users WHERE email = 'info@meraki-academy.org' ;

Q10) What is the query to perform a left join on two tables (users, posts) depending on the user_id? (user_id is a FK in `posts` table)

SELECT * FROM users LEFT JOIN posts ON users.user_id=posts.user_id;

Q11) What is the query to get all the users that their age ranges from 20-30 from the `users` table?

SELECT * FROM users WHERE 30 >age >20 ;

*/
