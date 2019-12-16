const { DataTypes } = require('sequelize')
const sequelize = require('../db/sequelize')

const AuthApp = sequelize.define('t_auth_app', {
  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  appid: {
    type: DataTypes.INTEGER(4),
    allowNull: false,
    unique: true
  },
  appname: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: true
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
  tableName: 't_auth_app'
})

AuthApp.sync({alter: true})

module.exports = AuthApp