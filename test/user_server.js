const PROTO_PATH = __dirname + '/../protos/user.proto'

const grpc = require('grpc')
const user_proto = grpc.load(PROTO_PATH).user

function sayHello(call, callback) {
    callback(null, {message: 'heool, ' + call.request.name})
}

function queryUser(call, callback) {
    callback(null, {level: 1, userid: call.request.userid})
}

function main() {
    let server = new grpc.Server()
    console.log(user_proto)
    server.addService(user_proto.User.service, {
        sayHello: sayHello,
        queryUser: queryUser
    })
    server.bind('0.0.0.0:50050', grpc.ServerCredentials.createInsecure())
    server.start()
}

main()