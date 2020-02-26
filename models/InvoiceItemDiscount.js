module.exports = function(sequelize, Sequelize) {
    return sequelize.define("InvoiceItemDiscount", {
      businessId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      invoiceItemId: {
        type: Sequelize.INTEGER
      },
      discountId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      discountRate: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      discountAmount: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      discountTax: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  };
  