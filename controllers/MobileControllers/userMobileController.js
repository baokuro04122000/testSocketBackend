import {user} from '../../services/index.js'

const userRegisterMB = ({username,password,deviceId}) => {
    return new Promise(async (resolve, reject)=>{
        try {
            const userRegister = await user.userRegister({username,password,deviceId});
            
            resolve({
                status:true,
                message:userRegister.success,
                token:userRegister.token
            })
        } catch (error) {
            reject({status:false,message:error})
        }
    })
}
const userLoginMB = ({username,password}) => {
    return new Promise(async (resolve, reject)=>{
        try {
            const {message, token} =await user.userLogin({username,password});
            resolve({status:true, message,token})        
        } catch (error) {
            console.log(error);
            reject({status:false, message:error})
        }
    })
}
export default {
    userRegisterMB,
    userLoginMB
};
