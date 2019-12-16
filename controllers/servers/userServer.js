const { getProto } = require('../../utils/tools')
const RPCServer = require('../server')
const UserService = require('../../services/userService')

class UserServer extends RPCServer {
    constructor(host, port, protoFileName) {
        super()
        this.host = host || '0.0.0.0'
        this.port = port || '50051'
        this.protoName = protoFileName || 'user.proto'
        // this.proto = getProto(proto) 
    }

    async queryUser(call, callback) {
        let { userid } = call.request
        let user = await UserService.queryUserPermisssion(userid)
        console.log(user)
        callback(null, {level: user.id, userid: call.request.userid})
    }

    sayHello(call, callback) {
        callback(null, {message: 'hello, ' + call.request.name})
    }

    start() {
        return super.run(this, this.host, this.port, (grpc) => {
            const packageDefinition = getProto(this.protoName)
            const user = grpc.loadPackageDefinition(packageDefinition).user
            const service = user.service.User.service
            return service
        })
    }
}

module.exports = UserServer