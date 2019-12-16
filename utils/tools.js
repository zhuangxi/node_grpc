const grpc = require('grpc')

const getProto = (filename) => {
    let path = __dirname + `/../protos/${filename}`
    let proto = grpc.load(path)

    return proto
}

module.exports = {
    getProto
}