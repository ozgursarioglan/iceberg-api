module.exports = function(sequelize, Sequelize) {
  return sequelize.define("BankAccount", {
    businessId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    companyId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    bankName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    accountName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    iban: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
};
