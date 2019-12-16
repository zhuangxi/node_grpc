const { DataTypes } = require('sequelize')
const sequelize = require('../db/sequelize')

const OrgTree = sequelize.define('t_org_tree', {
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
  treepath: {
    type: DataTypes.STRING(255),
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
  tableName: 't_org_tree'
})

OrgTree.sync({
  alter: true
})

module.exports = OrgTree