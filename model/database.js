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
  const initDBScript = fs.readFileSync("model/init_db.sql", "utf8");
  con.query(initDBScript, function (err, result) {
    if (err) throw err;
    console.log("Tables created and data populated successfully!");
    console.log("Closing the database connection...");
    con.end();
  });
});

