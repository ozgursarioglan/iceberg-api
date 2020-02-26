module.exports = function(sequelize, Sequelize) {
  return sequelize.define("Invoice", {
    id: {
      field: "id",
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    businessId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    sourceId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    companyId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    invoiceTypeId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    addressId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    statusId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    paymentStatusId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    isPrinted: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    isShipment: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    title: {
      type: Sequelize.STRING,
      allowNull: true
    },
    subTitle: {
      type: Sequelize.STRING,
      allowNull: true
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true
    },
    serialNumber: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        len: [1, 4]
      }
    },
    invoiceNumber: {
      type: Sequelize.STRING,
      allowNull: true
    },
    purchaseNumber: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    invoiceDate: {
      type: Sequelize.DATE,
      allowNull: false
    },
    dueDate: {
      type: Sequelize.DATE,
      allowNull: false
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
    },
    paymentTotal: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    currencyId: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    exchangeRate: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    isArchived: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    lastSentAt: {
      type: Sequelize.DATE,
      allowNull: true
    },
    lastViewedAt: {
      type: Sequelize.DATE,
      allowNull: true
    }
  });
};
