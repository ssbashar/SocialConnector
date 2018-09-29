// pointing it to express library
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');


// DB config
const  db = require('./keys').mongoURI
// connect to mongoDB
mongoose
.connect(db)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// creating an instance of express
const app = express(); 

//Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Let's write our first route
app.get('/', (req, res) => res.send('Hello World'));

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);


const port = 8000;
app.listen(port, () => console.log(`Server running on port ${port}`) );