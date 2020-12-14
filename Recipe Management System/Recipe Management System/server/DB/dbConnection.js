const mysql = require("mysql2/promise");

// const connectDB = async () => {
//   const conn = await mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "password",
//     database: "RecipeManagementsysyem",
//     multipleStatements: true,
//   });

//   console.log("Database connection successfull");
// };

// module.exports = connectDB;

const mysqlConnection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "RecipeManagementsysyem",
  multipleStatements: true,
});

// mysqlConnection.connect((err) => {
//   if (!err) {
//     console.log("connected");
//   } else {
//     console.log(err);
//   }
// });

module.exports = mysqlConnection;
