module.exports = function(sequelize, Sequelize) {
  return sequelize.define("Contact", {
    businessId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    companyId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: true
    },
    notes: {
      type: Sequelize.STRING,
      allowNull: true
    }
  });
};
