const express = require('express');
const app = express();
const path = require('path')

const ejs = require('ejs');
app.set('view engine', 'ejs');

const database = require('./database.js');

database.setKey("items", [{id:1, status:'active', name:'iPhone13', description:'A New iPhone13'},
                         {id:2, status:'active', name:'iPhone12', description:'A New iPhone12'}])

app.get('/', async function(req, res){
  database.getKey("items").then((value) => {
    res.render(__dirname + '/index.ejs', {items: value});
  })
  
});

app.get('/edit/:id', function(req, res){
console.log(req.params.id)
res.sendFile(path.join(__dirname, '/create.html'));
});

let server = app.listen(3000, function(){
  console.log("App server is running on port 3000");
});