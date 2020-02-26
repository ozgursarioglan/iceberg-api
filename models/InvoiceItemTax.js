module.exports = function(sequelize, Sequelize) {
  return sequelize.define("InvoiceItemTax", {
    businessId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    invoiceItemId: {
      type: Sequelize.INTEGER
    },
    taxId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    taxRate: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    taxAmount: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    taxDiscountRate: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    taxDiscountAmount: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    totalTax: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  });
};
