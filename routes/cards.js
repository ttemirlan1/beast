const express = require('express');

const path = require('path')

const fs = require('fs')

const router = express();

const data = [];

fs.readFile(
    path.join(__dirname, '../data', 'cards.json'),
    'utf-8',
    (err, data) => {
        if (err) {
            res.send('some error from cards')
        }
        else {
            router.get('/cards', (req, res) => {
                res.send(data);
            })
        }
    }
)
console.log(data)




module.exports = router;