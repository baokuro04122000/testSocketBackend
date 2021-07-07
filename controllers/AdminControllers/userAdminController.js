import {user} from '../../services/index.js';

const signIn =async (req,res)=>{
    const {username, password} = req.body;
    try{
        const data = await user.userLogin({username,password});
        res.send(data);
    }catch(err){
        res.send({message: err})
    }   
}
const signUp = async (req,res)=>{

    const {username,password,deviceId} = req.body;
    try {
        const data = await user.userRegister({username,password,deviceId});
        res.send(data);
    } catch (error) {
        res.send({message:error})        
    }
}
const getAllDevices =async (req,res) => {
    try {
        const devices = await user.getAllDevices();
        res.send(devices);
    } catch (error) {
        console.log(error);
        res.status(401).send({message:error})
    }
}
export default {
    signIn,
    signUp,
    getAllDevices
}