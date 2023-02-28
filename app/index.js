const express = require('express');
const mysql = require('mysql');
const {faker} = require('@faker-js/faker');

const DB_CONFIG = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'appdb'
}

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', async function (req, res) {
    const connection = mysql.createConnection(DB_CONFIG);
    await insertName(connection, faker.name.fullName());
    const names = await findAll(connection);

    let html = '<h1>Full Cycle Rocks!</h1>';
    html += '<ul>';
    names.forEach(row => html += `<li>${row.name}</li>`);
    html += '</ul>';
    res.send(html)
})

app.listen(PORT, () => {
    console.log(`Listening :${PORT}`);
});

function insertName(connection, name) {
    const sql = `INSERT INTO people(name)
                 values ("${name}")`;
    return query(connection, sql);
}

function findAll(connection) {
    const sql = "SELECT name FROM people";
    return query(connection, sql);
}

function query(connection, sql) {
    return new Promise((resolve, reject) => {
        return connection.query(sql, (err, result) => {
            if (err) reject(err);
            else resolve(result)
        });
    })
}