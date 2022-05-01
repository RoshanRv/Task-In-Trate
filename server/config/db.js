const mysql = require('mysql')

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'tasks'
})

module.exports = db