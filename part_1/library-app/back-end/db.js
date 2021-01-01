
const mysql = require('mysql2');
 
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'library-app'
});
 

connection.connect()

connection.query('SELECT * from books', function (err, rows, fields) {
  if (err) throw err

  console.log('books: ', rows)
})

connection.end()