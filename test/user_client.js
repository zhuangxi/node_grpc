const PROTO_PATH = __dirname + '/../protos/user.proto'

const grpc = require('grpc')
const user_proto = grpc.load(PROTO_PATH).user
console.log(user_proto.User)
function main() {
    let client = new user_proto.User('localhost:50051', grpc.credentials.createInsecure())
    let username = 'zx'
    client.sayHello({name: username}, (err, res) => {
        console.log(res)
    })

    client.queryUser({userid: 1001, username: username}, (err, res) => {
        console.log(res)
    })
}

main()