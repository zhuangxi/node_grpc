const { DataTypes } = require('sequelize')
const sequelize = require('../db/sequelize')

const User = sequelize.define('t_user', {
  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  userid: { 
    type: DataTypes.INTEGER(11),
    allowNull: false,
    unique: true
  },
  username: {
    type: DataTypes.STRING(11),
    allowNull: true
  },
  password: {
    type: DataTypes.STRING(11),
    allowNull: true
  },
  isroot: {
    type: DataTypes.INTEGER(1),
    allowNull: false,
    defaultValue: '0'
  },
  isadmin: {
    type: DataTypes.INTEGER(1),
    allowNull: false,
    defaultValue: '0'
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
  tableName: 't_user'
})

User.sync({
  alter: true
})

module.exports = User
