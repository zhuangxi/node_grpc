const UserClient = require('./controllers/clients/userClient')

const client = new UserClient()
client.start()
client.sayHello('zx')
client.queryUser(1002, 'zx')