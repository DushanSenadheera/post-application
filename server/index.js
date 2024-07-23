require('dotenv').config()
const express = require('express');
const app = express();
const connectToDB = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');

connectToDB(process.env.MONGO_DB_URI);

app.use(cors({origin: '*'}));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use('/', require('./routes/post'));

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})