const { DataTypes } = require('sequelize')
const sequelize = require('../db/sequelize')

const Role = sequelize.define('t_role', {
  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true
  },
  roleid: {
    type: DataTypes.INTEGER(5),
    allowNull: false,
    unique: true
  },
  rolename: {
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
    // allowNull: true
  }
}, {
  tableName: 't_role',
  timestamp: false
})

Role.sync({
  alter: true
})

module.exports = Role