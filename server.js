// pointing it to express library
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');


// creating an instance of express
const app = express(); 

// Let's write our first route
app.get('/', (req, res) => res.send('Hello World'));

// DB config
const  db = require('./keys').mongoURI

// connect to mongoDB
mongoose
.connect(db)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// middleware
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

const port = 8000;
app.listen(port, () => console.log(`Server running on port ${port}`) );