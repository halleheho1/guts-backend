// const mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
// Connection url
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'Guts';
// Connect using MongoClient

router.get('/', function(req, res, next) {
  MongoClient.connect(url, function(err, client) {
    // Use the admin database for the operation
    const db = client.db(dbName);
    db.collection('Health').findOne({}, function(err, item) {
      res.send(item);
      // db.close();
    })
    console.log(db);
  });
});

// router.get('/findByContactName/:surname', function(req, res){
//   Lead.find({"contacts.surname":req.params.name}).exec(function(err, leads){
//     res.send(leads);
// });
// }

module.exports = router;
