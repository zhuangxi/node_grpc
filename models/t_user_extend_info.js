const { DataTypes } = require('sequelize')
const sequelize = require('../db/sequelize')

const UserExt = sequelize.define('t_user_extend_info', {
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
  roleid: {
    type: DataTypes.INTEGER(11),
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
  tableName: 't_user_extend_info',
  // timestamp: false
})

UserExt.sync({
  alter: true
})

module.exports = UserExt

