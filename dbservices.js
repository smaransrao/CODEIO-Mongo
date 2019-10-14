var MongoClient = require('mongodb').MongoClient;
var conn = require('./dbconfig');
var url = conn.url;

createCollection = function(name){
    MongoClient.connect(url, function(err, dbconn) {
        if (err) throw err;
        //creating collection
        var db = dbconn.db(conn.dbname);
        db.createCollection(name, (err,res)=>{
            if (err) throw err;
            console.log("collection " + name + " created");
        });
      });
}




exports.insertDB = function(collection, obj){
    MongoClient.connect(url, function(err, dbconn) {
        if (err) throw err;
        //creating collection
        var db = dbconn.db(conn.dbname);
        db.collection(collection).insertOne(obj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
          });
    });
}