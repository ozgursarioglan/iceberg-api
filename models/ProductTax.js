module.exports = function(sequelize, Sequelize) {
    return sequelize.define("ProductTax", {
      businessId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      productId: {
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
      }
    });
  };
  