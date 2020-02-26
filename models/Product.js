module.exports = function(sequelize, Sequelize) {
  return sequelize.define("Product", {
    businessId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    stockCode: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    barcodeNumber: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    unitId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true
    },
    isStockable: {
      type: Sequelize.BOOLEAN,
      allowNull: true
    },
    criticalStock: {
      type: Sequelize.BOOLEAN,
      allowNull: true
    },
    criticalStockQuantity: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    isSold: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    isBought: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    purchasePrice: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    salesPrice: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  });
};
