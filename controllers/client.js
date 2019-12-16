const grpc = require('grpc')
const { accessLog, errorLog } = require('../utils/logger')

class RPCClient {
    run(host, port, callback) {
        try {
            host = host || '0.0.0.0'
            port = port || '50051'
            const ClientObj = callback(grpc)
            const client = new ClientObj(`${host}:${port}`, grpc.credentials.createInsecure())
            this.client = client
            return client
        }catch(e){
            console.log(e)
            errorLog.error(e)
        }
    }
}

module.exports = RPCClient