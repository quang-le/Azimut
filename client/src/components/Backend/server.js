let mongodb = require ('mongodb').MongoClient;
let url = "mongodb://localhost:27017/Azimut";

mongodb.connect(url, function(err,db,){
    if (err) throw err;
    console.log ("connection successful");
    db.close();
})