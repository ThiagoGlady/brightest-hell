const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

// DB Connection
const conn = require('./db/conn');

conn();

// Routes
app.use('/character', routes.characterRoute);
app.use('/user', routes.userRoute);

app.listen(3000, () => {
    console.log('API rodando');
})
