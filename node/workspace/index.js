const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

const connection = mysql.createConnection({
    host: 'localhost', //localhostはコンテナのIPを指定する
    user: 'docker',
    password: 'password',
    database: 'sample'
});

connection.connect((err) => {
    if (err) {
        console.log('error connecting: ' + err.stack);
        return;
    }
    console.log('success');
});