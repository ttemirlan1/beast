const express = require('express');

const path = require('path');

const fs = require('fs');

const router = express();

const data = [];

fs.readFile(
  path.join(__dirname, '../data', 'users.json'),
  'utf-8',
  (err, datas) => {
    if (err) {
      // eslint-disable-next-line no-undef
      res.send('some error from users');
    } else {
      router.get('/users', (req, res) => {
        res.send(datas);
      });
    }
  }
);
console.log(data);

module.exports = router;
