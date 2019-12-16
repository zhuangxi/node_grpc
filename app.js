const UserServer = require('./controllers/servers/userServer')

const server = new UserServer()
server.start()
