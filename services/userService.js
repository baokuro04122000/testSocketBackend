import UserModel from "../models/userModel.js"
import bcrypt from 'bcrypt';
import {transErrors, transSuccess} from '../lang/vi.js';
import {generateToken} from '../helpers/jwtHelper.js';
let saltRounds =  7;


const userRegister = ({username,password,deviceId}) => {
    return new Promise(async (resolve,reject)=>{
        try {   
            const userExist = await UserModel.findUserByDeviceId(deviceId);
            if(userExist){
                reject(transErrors.account_existed);
            }
            let saft = bcrypt.genSaltSync(saltRounds);
            let userItem = {
                username:username,
                deviceId:deviceId,
                password:bcrypt.hashSync(password,saft)
            };
            const user = await UserModel.createUser(userItem);

            resolve({
                success:transSuccess.register_success_mobile(user.username),
                token:await generateToken(user)
            });
        } catch (error) {
            reject(error);
        }
    })
}


const userLogin = ({username,password}) => {
    return new Promise(async (resolve,reject)=>{
        const userInfo = await UserModel.findUserByUsername(username);
        if(!userInfo) throw reject('Invalid email or password')
        const checkPass =await userInfo.comparePassword(password);
        if(checkPass){
            resolve({
                _id:userInfo._id,
                message:transSuccess.login_success_mobile(userInfo.username),
                username:userInfo.username,
                deviceId:userInfo.deviceId,
                isAdmin:userInfo.isAdmin,
                token:await generateToken(userInfo)
            })
        }    
    })
}
export default {
    userRegister,
    userLogin
}