
let url = "mongodb://localhost:27017/";
const port = process.env.PORT || 3001;

var myDB;//global var for the DB, not so clean

let mongodb = require ('mongodb').MongoClient;
nodeApp.use(bodyParser.urlencoded({extended:true}));
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


nodeApp.put('/createuser', (req,res)=>{
    //needs sanitization
    myDB.collection('users2').save(req.body,(err,result)=>{
        if (err) return console.log(err)
        console.log('saved to database')
        res.send(result);
    })
});

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
