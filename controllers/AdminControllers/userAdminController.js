import {user} from '../../services/index.js';

const signIn =async (req,res)=>{
    const {username, password} = req.body;
    try{
        const data = await user.userLogin({username,password});
        res.send(data);
    }catch(error){
        res.send({
            status:401,
            success:false,
            message:error
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
            status:401,
            success:false,
            message:error})        
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
const updateStatus =async (req,res) =>{
    const {deviceId,status} = req.body;
    try {
        const updated = await user.updateStatus(deviceId,status);
        res.send({message:"successful updating"});        
    } catch (error) {
        console.log(error);
        res.status(401).send({message:error});
    }
}
// test
const deleteUser = async (req,res) => {
    const {username} = req.params;
    try {
        const deleted = await user.deleteUser(username);
        res.send({message:"successful deleting"})
    } catch (error) {
        console.log(error);
        res.send({message:error})
    }
}
export default {
    signIn,
    signUp,
    getAllDevices,
    deleteUser,
    updateStatus
}