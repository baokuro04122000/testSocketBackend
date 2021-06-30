import {user} from '../../services/index.js'

const userRegisterMB = ({username,password,deviceId}) => {
    return new Promise(async (resolve, reject)=>{
        try {
            const userRegister = await user.userRegister({username,password,deviceId});    
            resolve({
                status:true,
                message:userRegister.success,
                data:{
                    username:userRegister.username,
                    deviceId:userRegister.deviceId,
                    token:userRegister.token
                }
            })
        } catch (error) {
            reject({status:false,message:error,data:{}})
        }
    })
}
const userLoginMB = ({username,password}) => {
    return new Promise(async (resolve, reject)=>{
        try {
            const userLogined =await user.userLogin({username,password});
            resolve({
                status:true,
                message,
                data:{
                    username:userLogined.username,
                    deviceId:userLogined.deviceId,
                    token:userLogined.token
                }})        
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
