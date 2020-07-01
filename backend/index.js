const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());
const todoRoutes = require('./routes/todoroutes');

mongoose.connect('mongodb://127.0.0.1:27017/todos', {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB databse connection established successfully");
});

let Todo = require('./todo.model');

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/test', (req,res) => {
    res.send("hello backend");
});

app.use('/todos', todoRoutes);

const port = process.env.PORT || 9000;
app.listen(port);

console.log('App is listening on port ' + port);