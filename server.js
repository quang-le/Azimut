
mongodb.connect(url, function(err,db,){
    if (err) throw err;
    myDB=db.db("Azimut");
    nodeApp.listen(3001, function(){
        console.log ("listening to 3001")
    });
})