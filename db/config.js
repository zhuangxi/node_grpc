const db = {
    database: 'auth',
    dialect: 'mysql',
    charset: 'utf8_general_ci',
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'root',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    // 时区
    timezone: '+08:00',
    operatorsAliases: false,
    multipleStatements: true
}

module.exports = db