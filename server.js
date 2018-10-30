const express= require('express');
const bodyParser= require('body-parser')
const nodeApp=express();

let url = "mongodb://localhost:27017/";
const port = process.env.PORT || 3001;

var myDB;//global var for the DB, not so clean

let mongodb = require ('mongodb').MongoClient;

nodeApp.use(bodyParser.urlencoded({extended:true}));
nodeApp.use(bodyParser.json());

mongodb.connect(url, function(err,db,){
    if (err) throw err;
    myDB=db.db("Azimut");
    nodeApp.listen(port, function(){
        console.log ('listening to '+ port)
    });
})

nodeApp.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
  });


nodeApp.post('/createuser', (req,res)=>{
    //needs sanitization
    myDB.collection('users2').insertOne(req.body,(err,result)=>{
        if (err) return console.log(err)
        console.log('saved to database')
        res.send(result);
    })
});

nodeApp.post('/addroute', (req,res)=>{
    //needs sanitization
   
    myDB.collection('users2')
    .updateOne(
        {"user":req.body.user},
        {$setOnInsert:{"name":req.body.pathname,"coordinates":req.body.coordinates}},
        {upsert:true});
    });

    

// nodeApp.post('/updateroute',(req,res)=>{
//     //needs sanitization
//     myDB.collection
// })

console.log("ta mère en string");

// nodeApp.get('/',(req,res)=>{
//     res.sendFile('/Users/quangle/Azimut/Node_Server/index.html');
// });

// nodeApp.get('/',(req,res)=>{
//    myDB.collection('quotes').find().toArray(function(err,results){
//         if (err) throw err;
//         //res.render function here
        
//     })
   
// })