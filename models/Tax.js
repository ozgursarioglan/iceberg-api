module.exports = function(sequelize, Sequelize) {
  return sequelize.define("Tax", {
    businessId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    groupName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true
    },
    taxRate: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  });
};
