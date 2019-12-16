const grpc = require('grpc')
const { accessLog, errorLog } = require('../utils/logger')

/**
 * RPC服务
 * 
 * @param methods 方法对象
 * @param host 绑定ip，默认0.0.0.0
 * @param port 端口号，默认50051
 * @param callback 服务回调函数
 * @return server 服务对象
 * 
 */

class RPCServer {
    run(methods, host, port, callback){
        try{
            const service = callback(grpc)
            const server = new grpc.Server()
            this.server = server
            server.addProtoService(service, methods)
            host = host || '0.0.0.0'
            port = port || '50051'
    
            server.bind(`${host}:${port}`, grpc.ServerCredentials.createInsecure())
            server.start()
            return server
        }catch(e){
            console.log(e)
            errorLog.error(e)
        }
    }
    
    close() {
        if(this.server){
            this.server.forceShutdown()
        }else{
            console.log('server not started')
        }
    }
}

module.exports = RPCServer