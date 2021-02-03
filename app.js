const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
//http://127.0.0.1:3000/
app.get('/', (req,res) => res.send('Hello NodeJS!'));
app.get('/service', (req,res) => {
    var status_name =req.param('status');
    res.send('The system is running [Status:' + user_name + ']');
});