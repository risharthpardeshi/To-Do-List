const express = require ("express");
const bodyParser = require ("body-parser");

const app = express ( ) ;
const PORT = process.env.PORT || 3030;

let items = [];
let workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get ( "/" , function ( req , res ) {
    let today = new Date();

let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
};

let day = today.toLocaleDateString("en-US", options);

res.render("list", {listTitle: day, newlistItems: items});

app.post("/" ,function(req, res){
    let item = req.body.newItem;

items.push(item);
res.redirect("/")
});

app.get("/work", function(req,res){
    res.render("list", {listTitle: "work List",newlistItems: workItems });
});

app.post("/work", function(req,res){
    let item = req.body.newItem;
    workItems.puch(item);
    res.redirect("/work");
})

} ) ;


app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });