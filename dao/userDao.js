const User = require('../models/t_user')
const { Op } = require('sequelize')

const UserApi = {
    findOne: async (options) => {
        return await User.findOne({
            where: options,
            raw: true
        })
    }
}

module.exports = UserApi