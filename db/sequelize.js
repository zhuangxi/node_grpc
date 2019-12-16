const Sequelize = require('sequelize')
const db = require('./config')

const sequelize = new Sequelize('auth', db.user, db.password, {
    host: db.host,
    dialect: 'mysql',
    port: db.port,
    dialectOptions: {
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci",
        supportBigNumbers: true,
        bigNumberStrings: true
    },

    // sync: { force: true }, // 若表存在，则丢弃重建
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: '+08:00' //东八时区
})

sequelize.authenticate().then(() => {
    console.log('connected')
}).catch((err) => {
    console.log(err)
})

module.exports = sequelize