
const mysql = require('mysql2');
 
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'library-app'
});
 

connection.connect()
try {
    const data = await sql.query('SELECT * FROM USERS ');
} catch (error) {
    console.log(error);
}
connection.query('SELECT * from books', function (err, rows, fields) {
  if (err) throw err

  console.log('books: ', rows)
})

connection.end()