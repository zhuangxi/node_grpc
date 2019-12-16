const log4js = require('log4js')
const path = require('path')

log4js.configure({
    appenders: {
        access_log: {
            type: 'dateFile',
            pattern: 'yyyy-MM-dd.log', //生成文件的规则
            alwaysIncludePattern: true, //文件名始终以日期区分
            maxLogSize: 20971520, //文件最大存储空间
            backups: 3, // 当文件内容超过文件存储空间时，备份文件的数量
            daysToKeep: 10, // 只保留距离当前时间N天的日志文件
            filename: path.join('logs/', 'access') //生成文件名
        },
        error_log: {
            type: 'dateFile',
            pattern: 'yyyy-MM-dd.log',
            alwaysIncludePattern: true,
            maxLogSize: 20971520,
            backups: 3,
            daysToKeep: 10,
            filename: path.join('logs/', 'error')
        },
        console: {
            type: 'console'
        }
    },
    categories: {
        default: {
            appenders: ['console'],
            level: 'info'
        },
        access: {
            appenders: ['access_log'],
            level: 'info'
        },
        error: {
            appenders: ['error_log'],
            level: 'error'
        }
    }
})

exports.accessLog = log4js.getLogger('access')
exports.errorLog = log4js.getLogger('error')