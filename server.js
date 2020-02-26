var express = require("express");
const bodyParser = require("body-parser");
var app = express();
var _ = require("underscore");
const PORT = 3030;
var db = require("./db.js");
app.use(bodyParser.json());

//Cors Configuration
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

db.Invoice.hasMany(db.InvoiceItem, {
  foreignKey: "invoiceId",
  targetKey: "invoiceId",
  as: "items"
});

db.InvoiceItem.belongsTo(db.Invoice, {
  foreignKey: "invoiceId",
  targetKey: "id"
});

// POST /invoices
app.post("/api/invoices", (req, res) => {
  console.log(req);
  db.Invoice.create(req.body, {
    include: [{ model: db.InvoiceItem, as: "items" }]
  }).then(invoice => {
    res.json(invoice);
  });
});

app.get("/api/invoices", (req, res) => {
  db.Invoice.findAll({
    include: [{ model: db.InvoiceItem, as: "items" }]
  }).then(invoice => {
    res.json(invoice);
  });
});


app.post("/api/products", (req, res) => {
  db.Product.create(req.body).then(product => {
    res.json(product);
  });
});

app.get("/api/products", (req, res) => {
  db.Product.findAll().then(product => {
    res.json(product);
  });
});

app.get('/api/products/:id', (req, res) =>{
  let { id } = req.params;
  db.Product.findByPk(id).then((product) =>{
    if (product){
      res.json(product)
    }else{
      res.status(404).send();
    }
  })
});


app.get("/api/company", (req, res) => {
  db.Company.findAll().then(company => {
    res.json(company);
  });
});

db.sequelize.sync({ force: false }).then(function() {
  console.log("Database connection successful");
  app.listen(PORT, function() {
    console.log("Express listening on: " + PORT + "!");
  });
});
