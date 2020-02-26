var Sequelize = require('sequelize');

var sequelize = new Sequelize('iceberg_db','root','1',{
    host: 'localhost',
    dialect: 'mysql'
})


var db = {}

db.Invoice = sequelize.import(__dirname + '/models/Invoice.js');
db.InvoiceItem = sequelize.import(__dirname + '/models/InvoiceItem.js');
db.Address = sequelize.import(__dirname + '/models/Address.js');
db.BankAccount = sequelize.import(__dirname + '/models/BankAccount.js');
db.Company = sequelize.import(__dirname + '/models/Company.js');
db.Contact = sequelize.import(__dirname + '/models/Contact.js');
db.Discount = sequelize.import(__dirname + '/models/Discount.js');
db.InvoiceItemDiscount = sequelize.import(__dirname + '/models/InvoiceItemDiscount.js');
db.InvoiceItemTax = sequelize.import(__dirname + '/models/InvoiceItemTax.js');
db.Product = sequelize.import(__dirname + '/models/Product.js');
db.ProductTax = sequelize.import(__dirname + '/models/ProductTax.js');
db.Tax = sequelize.import(__dirname + '/models/Tax.js');

db.Sequelize = Sequelize;

db.sequelize = sequelize;


module.exports = db;