const express= require('express');
const bodyParser= require('body-parser')
const nodeApp=express();

let url = "mongodb://localhost:27017/";

var myDB;//global var for the DB, not so clean

let mongodb = require ('mongodb').MongoClient;
nodeApp.use(bodyParser.urlencoded({extended:true}));



nodeApp.get('/',(req,res)=>{
    res.sendFile('/Users/quangle/Azimut/Node_Server/index.html');
});

nodeApp.get('/',(req,res)=>{
   myDB.collection('quotes').find().toArray(function(err,results){
        if (err) throw err;
        //res.render function here
        
    })
   
})

nodeApp.post('/quotes', (req,res)=>{
    myDB.collection('quotes').save(req.body,(err,result)=>{
        if (err) return console.log(err)
        console.log('saved to database')
        res.redirect('/')
    })
});


mongodb.connect(url, function(err,db,){
    if (err) throw err;
    myDB=db.db("Azimut");
    nodeApp.listen(3001, function(){
        console.log ("listening to 3001")
    });
    // let query={username:"Ulric"};
    // dbo.collection("users2").find(query).toArray(function(err,result){
    //     if (err) throw err;
    //     console.log(result);
    //     db.close();
    // })
})

console.log("ta mère en string");