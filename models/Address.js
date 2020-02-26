module.exports = function(sequelize, Sequelize) {
  return sequelize.define("Address", {
    businessId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    companyId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    addressTitle: {
      type: Sequelize.STRING,
      allowNull: true
    },
    addressLine1: {
      type: Sequelize.STRING,
      allowNull: true
    },
    addressLine2: {
      type: Sequelize.STRING,
      allowNull: true
    },
    state: {
      type: Sequelize.STRING,
      allowNull: true
    },
    city: {
      type: Sequelize.STRING,
      allowNull: true
    },
    zipCode: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    notes: {
      type: Sequelize.STRING,
      allowNull: true
    }
  });
};
