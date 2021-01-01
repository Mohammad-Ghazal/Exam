const express = require("express");
import axios from "axios";
import db from "db"
const app = express();

//Q1)
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'library-app'
});
const mysql = require('mysql2');

connection.connect()



const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});



//Q2) 
axios.post("/books").then(function (res, req) {
  let { title, author, pages, publisher, published_at } = req.body;

connection.query(`insert into books ((title , author, pages, publisher, published_at)
 values =${(title , author, pages, publisher, published_at)})  `,
  function (err, rows, fields) {
  if (err) throw err

  console.log('sucess add new book')
})

});

//Q3)
axios.get("/books").then(function (res, req) {

connection.query(`select * from books`, function (err, rows, fields) {
  if (err) throw err

  console.log('books: ', rows)
})

});


//Q4)
axios.get("/books/:book_id").then(function (res, req) {
  let {bookId} = req.params;

  connection.query(`select * from books where id = ${bookId}`, function (err, rows, fields) {
    if (err) throw err
  
    console.log('books: ', rows)
  })
  
  });


  //Q5)
  axios.del("/books/:book_id").then(function (res, req) {
    let {bookId} = req.params;
  
    connection.query(`drop column from books where id = ${bookId}`, function (err, rows, fields) {
      if (err) throw err
    
      console.log('books: ', rows)
    })
    
    });


connection.end()