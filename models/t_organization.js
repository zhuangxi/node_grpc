const { DataTypes } = require('sequelize')
const sequelize = require('../db/sequelize')

const Org = sequelize.define('t_organization', {
  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  orgid: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    unique: true
  },
  orgname: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  level: {
    type: DataTypes.INTEGER(4),
    allowNull: false
  },
  super: {
    type: DataTypes.INTEGER(4),
    allowNull: false
  },
  appid: {
    type: DataTypes.INTEGER(11),
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 't_organization',
  // timestamp: false
})

Org.sync({
  alter: true
})

module.exports = Org