require("dotenv").config();
const fs = require("fs");
const mysql = require("mysql");
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_USER = process.env.DB_USER || "root";
const DB_PASS = process.env.DB_PASS || "";
const DB_NAME = process.env.DB_NAME || "murderMystery";

const con = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  charset: "utf8mb4",
  multipleStatements: true,
});
con.connect(function (err) {
  if (err) throw err;
  console.log(process.cwd());
  const initDBScript = fs.readFileSync('model/init_db.sql', 'utf8');
  con.query(initDBScript, function (err, result) {
    if (err) throw err;
    console.log('Tables created and data populated successfully!');
    console.log('Closing the database connection...');
    con.end();
  });
});















// require('dotenv').config();
// const mysql = require("mysql");

// const DB_HOST = process.env.DB_HOST;
// const DB_USER = process.env.DB_USER;
// const DB_PASS = process.env.DB_PASS;
// const DB_NAME = process.env.DB_NAME;


// const con = mysql.createConnection({
//   host: DB_HOST || "127.0.0.1",
//   user: DB_USER || "root",
//   password: DB_PASS,
//   database: DB_NAME || "murderMystery",
//   charset: '',
//   port: 4000,
//   multipleStatements: true
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");

//   let sql =
//    `
//    CREATE TABLE rooms (
//     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//     room INT NOT NULL,
//     main_location VARCHAR(50) NOT NULL,
//     description TEXT NOT NULL,
//     img VARCHAR(255) NOT NULL
//   );
  
//   CREATE TABLE characters (
//     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(50) NOT NULL,
//     last_name VARCHAR(50) NOT NULL,
//     description TEXT NOT NULL,
//     img VARCHAR(255) NOT NULL,
//     room_id INT,
//     FOREIGN KEY (room_id) REFERENCES rooms(id)
//   );
  
//   CREATE TABLE clues (
//     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//     description TEXT NOT NULL,
//     character_id INT NULL,
//     img VARCHAR(255) NOT NULL,
//     FOREIGN KEY (character_id) REFERENCES characters(id)
//   );
//   `
//   con.query(sql, function(err, result) {
//     if (err) throw err;
//     console.log("Table creation was successful!");

//     console.log("Closing...");
//   });

//   con.end();
// });

