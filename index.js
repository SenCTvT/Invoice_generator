var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var db = require("./models");


// var db = require("./models");
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res){
    db.Bills.find(function(err, bills){
        if(err){
            console.log(err);
        }
        else{
            res.render("Launch", {bills: bills});
        }
    });
    
});
app.get("/form/:id", function(req, res){
    db.Bills.findById(req.params.id, function(err, bill){
        if(err){
            console.log("err");
        }
        else{
            // console.log(bill);
             res.render("form2", {bill: bill});
        }
    });
    
});
app.get("/preview/:id", function(req, res){
    db.Bills.findById(req.params.id, function(err, bill){
        if(err){
            console.log("err");
        }
        else{
            // console.log(bill);
             res.render("preview", {data: bill});
        }
    });
    
});

app.get("/form", function(req, res){
    res.render("form");
    
});
var data;
app.post("/preview", function(req, res){
     data = req.body;
     db.Bills.create(data, function(err, callback){
        if(err){
          console.log(err);
        }
        else{
          console.log("added new Bill");
        }
      });
      if(typeof(data.product) == "string"){
        data.product = [ data.product];
        data.hsn = [ data.hsn ];
        data.quantity = [ data.quantity ];
        data.rate = [ data.rate ];
        data.unit = [ data.unit ];
        
        console.log(" hello"+ data.product);       
      }
    //   console.log(data);
      res.render("preview", {data:data});
});

app.get("/preview", function(req, res){
    res.render("preview", {data:data});
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started......."+ process.env.PORT);
});
