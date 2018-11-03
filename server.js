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

//display route coordinates
nodeApp.post('/displayroutes',(req,res)=>{
    let data=myDB.collection('users2').find({"user":"goku@dbz.jp"}).toArray(function(err,result){
        let dataToSend;
        if (err) throw err;
        console.log("result", result);
        dataToSend=JSON.stringify(result);
        console.log("datatosend",dataToSend)
        return res.send(dataToSend);
    });   
    //res.send(data);   
})


//update route
nodeApp.post('/updateroute', (req,res)=>{
    //needs sanitization
    myDB.collection('users2')
    .findOneAndUpdate(
        {"user":req.body.user,
        "path.name":req.body.oldName
    },
        {$set:{"path.name":req.body.newName}},
        {upsert:true});
    res.send('doc updated');
    });


//add route. doesn't filter if name already exists
nodeApp.post('/addroute', (req,res)=>{
    //needs sanitization
    myDB.collection('users2')
    .insertOne(
        {"user":req.body.user,
        "path":{"name":req.body.pathname,"coordinates":req.body.coordinates}},
    );
});

nodeApp.delete('/deleteroute', (req,res)=>{
    myDB.collection('users2')
    .deleteOne(
        {'path.name':req.body.pathName}
    );
    res.send('1 doc deleted');    
});

    

// nodeApp.post('/updateroute',(req,res)=>{
//     //needs sanitization
//     myDB.collection
// })


// nodeApp.get('/',(req,res)=>{
//     res.sendFile('/Users/quangle/Azimut/Node_Server/index.html');
// });

// nodeApp.get('/',(req,res)=>{
//    myDB.collection('quotes').find().toArray(function(err,results){
//         if (err) throw err;
//         //res.render function here
        
//     })
   
// }))