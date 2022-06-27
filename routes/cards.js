const express = require('express');
const path = require('path');

const fs = require('fs');

const router = express();

const data = [];

fs.readFile(
  path.join(__dirname, '../data', 'cards.json'),
  'utf-8',
  (err, datas) => {
    if (err) {
      // eslint-disable-next-line no-undef
      res.status(500).send('some error from cards');
    } else {
      router.get('/cards', (req, res) => {
        res.send(datas);
      });
    }
  }
);
console.log(data);

module.exports = router;
