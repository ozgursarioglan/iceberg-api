module.exports = function(sequelize, Sequelize) {
  return sequelize.define("Company", {
    businessId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    shortName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    companyType: {
      type: Sequelize.STRING,
      allowNull: true
    },
    taxOffice: {
      type: Sequelize.STRING,
      allowNull: true
    },
    taxNumber: {
      type: Sequelize.STRING,
      allowNull: true
    },
    citizenshipNumber: {
      type: Sequelize.STRING,
      allowNull: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true
    },
    phoneNumber: {
      type: Sequelize.STRING,
      allowNull: true
    },
    mobileNumber: {
      type: Sequelize.STRING,
      allowNull: true
    },
    faxNumber: {
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
