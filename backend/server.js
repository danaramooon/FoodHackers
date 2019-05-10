const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var cors = require('cors')
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/foodtest', {
    useNewUrlParser: true,
    useFindAndModify: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
require('./routes/userRoute.js')(app);

// listen for requests
app.listen(8000, () => {
    console.log("Server is listening on port 8000");
});
