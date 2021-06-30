import {user} from '../../services/index.js';

const signIn =async (req,res)=>{
    const {username, password} = req.body;
    try{
        const data = await user.userLogin({username,password});
        res.send(data);
    }catch(err){
        res.status(401).send({message: err})
    }   
}
export default {
    signIn
}