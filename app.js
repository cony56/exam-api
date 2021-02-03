const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
//http://127.0.0.1:3000/
app.get('/', (req,res) => res.send('Hello NodeJS!'));
app.get('/service', (req,res) => {
    var status_name =req.param('name');
    res.send('The system is running [Status:' + status_name + ']');
});
app.listen(port, () => console.log('Example app listening on port 3000'))