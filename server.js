require('dotenv').config(); // import dotenv, Node mod that loads environ variables from an .env file
// .env files are NOT js files
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('The server is running');
});

// adjust this to access environment variables
app.listen(3000, () => {
  console.log(`Listening on port 3000`);
  console.log(`Your secret is ${process.env.SECRET_PASSWORD}`); // stored on the server side so our secret is safe
});

// add .gitignore file and include .env in gitignore file to keep secrets safe from github