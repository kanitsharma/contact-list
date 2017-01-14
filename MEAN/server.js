var express = require('express');
var fs = require('fs');
var mongojs = require('mongojs');
var db = mongojs('contactlist',['contactlist']);
var bodyparser = require('body-parser');
var app = express();
app.use(bodyparser.json());
app.use(express.static(__dirname+"/public"));
app.get('/contactlist',function(req,res){
  console.log("get request recieved");
  db.contactlist.find(function(err,docs){
    console.log(docs);
    res.json(docs);
  });
});
app.post('/contactlist',function(req,res){
  console.log(req.body);
  db.contactlist.insert(req.body,function(err,doc){
    res.json(doc);
  });
});
 app.listen('3000');
 console.log('server running on port 3000');
