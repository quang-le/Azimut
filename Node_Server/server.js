let mongodb = require ('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";

mongodb.connect(url, function(err,db,){
    if (err) throw err;
    let dbo=db.db("Azimut");
    let query={username:"Ulric"};
    dbo.collection("users2").find(query).toArray(function(err,result){
        if (err) throw err;
        console.log(result);
        db.close();
    })
})