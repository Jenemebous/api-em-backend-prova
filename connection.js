const mysql = require("mysql2")

const connection = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'meubdd',

})
   

;

module.exports = connection;