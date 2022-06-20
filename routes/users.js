const express = require('express');

const path = require('path')

const fs = require('fs')

const router = express();

const data = [];

fs.readFile(
    path.join(__dirname, '../data', 'users.json'),
    'utf-8',
    (err, data) => {
        if (err) {
            throw err;
        }
        else {
            router.get('/users', (req, res) => {
                res.send(data);
            })
        }
    }
)
console.log(data)




module.exports = router;