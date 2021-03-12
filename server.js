const express = require('express')
const app = express()
const jsdom = require("jsdom");


app.use(express.static(__dirname + '/public'));

// GET Home page
app.get('/', function(req, res) {
  res.sendFile('index.html');
})


// Listen
var port = process.env.PORT || 3000;
app.listen(port, () => console.log('Our app is running on http://localhost:' + port))
