module.exports = function(sequelize, Sequelize) {
  return sequelize.define("InvoiceItem", {
    businessId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    invoiceId: {
      type: Sequelize.INTEGER
    },
    productId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true
    },
    grossTotal: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    taxTotal: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    discountTotal: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    total: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  });
};
