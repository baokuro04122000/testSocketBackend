import {assignment} from '../../services/index.js';

const updateContactsMB =async (req,res) => {
    const {contacts, assignmentId} = req.body;
    try {
        const updated = await assignment.updateContactsMB(assignmentId, contacts);
        res.send({
            status:200,
            success:true,
            message:"successful updating"
        })
    } catch (error) {
        res.send({
            status:401,
            success:false,
            message:error
        })
    }
} 

const updateStatusForEachContact =async (req,res) => {
    const {assignmentId,contactId,status} = req.body;
    try {
        const updated = await assignment.updateForEachStatusContact(assignmentId,contactId,status);
        console.log(updated);
        res.send({status:200,
        success:true,
    message:"successful updating"})
    
    } catch (error) {
        console.log(error);
        res.send({status:401,
        success:false,
    message:error})
    }
}
export default {
    updateContactsMB,
    updateStatusForEachContact
}