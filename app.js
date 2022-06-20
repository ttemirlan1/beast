const express = require('express')

const app = express();

const {PORT = 3000 } = process.env;

const cardrouter = require('./routes/cards')

const userrouter = require('./routes/users')

app.use(cardrouter);

app.use(userrouter);


app.use('/', (req, res) => {
    res.status(404).send('<h1>ERROR 404</h1>')
})

app.listen(PORT, console.log(`server is running on port${PORT}`) )