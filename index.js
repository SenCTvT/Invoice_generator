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
    res.render("Home");    
});



app.get("/LaunchSS", function(req, res){
    db.BillsSS.find(function(err, bills){
        if(err){
            console.log(err);
        }
        else{
            res.render("LaunchSS", {bills: bills});
        }
    }).sort({"_id":-1});
    
});

app.get("/LaunchAK", function(req, res){
    db.Bills.find(function(err, bills){
        if(err){
            console.log(err);
        }
        else{
            res.render("Launch", {bills: bills});
        }
    }).sort({"_id":-1});
    
});


app.get("/LaunchASC", function(req, res){
    db.BillsASC.find(function(err, bills){
        if(err){
            console.log(err);
        }
        else{
            res.render("LaunchASC", {bills: bills});
        }
    }).sort({"_id":-1});
    
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

app.get("/form3/:id", function(req, res){
    db.BillsSS.findById(req.params.id, function(err, bill){
        if(err){
            console.log("err");
        }
        else{
            // console.log(bill);
             res.render("form4", {bill: bill});
        }
    });
    
});

app.get("/form5/:id", function(req, res){
    db.BillsASC.findById(req.params.id, function(err, bill){
        if(err){
            console.log("err");
        }
        else{
             console.log(bill);
             res.render("form6", {bill: bill});
        }
    });
    
});




app.get("/preview/:id", function(req, res){
    db.Bills.findById(req.params.id, function(err, bill){
        if(err){
            console.log("err");
        }
        else{
             //console.log(bill);
             res.render("preview", {data: bill});
        }
    });
    
});
app.get("/previewSS/:id", function(req, res){
    db.BillsSS.findById(req.params.id, function(err, bill){
        if(err){
            console.log("err");
        }
        else{
             res.render("previewSS", {data: bill});
        }
    });
    
});

app.get("/previewASC/:id", function(req, res){
    db.BillsASC.findById(req.params.id, function(err, bill){
        if(err){
            console.log("err");
        }
        else{
            console.log("bill" + bill);
            res.render("previewASC", {data: bill});
        }
    });
    
});
app.get("/form", function(req, res){
    res.render("form");
    
});
app.get("/form3", function(req, res){
    res.render("form3");
    
});

app.get("/form5", function(req, res){
    res.render("form5");
    
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
        
     
      }
    //   console.log(data);
      res.render("preview", {data:data});
});




app.post("/previewSS", function(req, res){
    data = req.body;
    db.BillsSS.create(data, function(err, callback){
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
       
     }
 
     res.render("previewSS", {data:data, billtype:"ss"});
});



app.post("/previewASC", function(req, res){
    data = req.body;
    console.log(data);
    db.BillsASC.create(data, function(err, callback){
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
       data.discountrate = [ data.discountrate ];  
       data.productdescription = [data.productdescription];
     }
    //  console.log(data);
     res.render("previewASC", {data:data, billtype:"asc"});
});





app.get("/delete/ss/:id", function(req, res){
    db.BillsSS.findByIdAndDelete(req.params.id, function(err, response){
        if(err){
            console.log(err);
        }
        else{
            res.redirect("/LaunchSS");
        }
    })
})

app.get("/delete/ak/:id", function(req, res){
    db.Bills.findByIdAndDelete(req.params.id, function(err, response){
        if(err){
            console.log(err);
        }
        else{
            res.redirect("/LaunchAK");
        }
    })
})
app.get("/delete/asc/:id", function(req, res){
    db.BillsASC.findByIdAndDelete(req.params.id, function(err, response){
        if(err){
            console.log(err);
        }
        else{
            res.redirect("/LaunchASC");
        }
    })
})




app.listen(8000, function(){
    console.log("server started......."+ 8000);
});

// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log("server started......."+ process.env.PORT);
// });
