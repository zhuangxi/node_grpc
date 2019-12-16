const { getProto } = require('../../utils/tools')
const RPCClient = require('../client')

class UserClient extends RPCClient {
    constructor(host, port, proto) {
        super()
        this.host = host || 'localhost'
        this.port = port || '50051'
        this.proto = proto || 'user.proto'
    }

    sayHello(username) {
        this.getClient().sayHello({name: username}, (err, res) => {
            if(err){
                console.log(err)
            }else{
                console.log(res)
            }
        })
    }

    queryUser(userid, username) {
        this.getClient().queryUser({userid, username}, (err, res) => {
            if(err){
                console.log(err)
            }else{
                console.log(res)
            }
        })
    }

    getClient() {
        if(this.client) {
            return this.client
        }else{
            this.start()
            return this.client
        }
    }

    start() {
        return super.run(this.host, this.port, (grpc) => {
            const packageDefinition = getProto(this.proto)
            const user = grpc.loadPackageDefinition(packageDefinition).user
            return user.service.User
        })
    }
}

module.exports = UserClient