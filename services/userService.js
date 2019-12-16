const userDao = require('../dao/userDao')

class UserService {
    static async queryUserPermisssion (userid){
        try{
            let user = await userDao.findOne({userid})
            if(user) {
                return user
            }else{
                return false
            }
        }catch(e) {
            console.log(e)
        }
    } 
}

module.exports = UserService