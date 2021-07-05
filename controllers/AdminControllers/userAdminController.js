import {user} from '../../services/index.js';

const signIn =async (req,res)=>{
    const {username, password} = req.body;
    try{
        const data = await user.userLogin({username,password});
        res.send(data);
    }catch(err){
        res.send({
            success:false,
            message: err
        })
    }   
}
const signUp = async (req,res)=>{
    
    const {username,password,deviceId} = req.body;
    try {
        const data = await user.userRegister({username,password,deviceId});
        res.send(data);
    } catch (error) {
        res.send({
            success:false,
            message:error
        })        
    }
}
export default {
    signIn,
    signUp
}