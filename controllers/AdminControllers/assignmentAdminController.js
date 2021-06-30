import {assignment} from '../../services/index.js';

const addAssignment =async (req,res) => {
    const {adminId,deviceId,actions,contacts,context} = req.body;
    console.log(adminId,deviceId,actions,contacts,context);
    try {
        const addNewAssignment = await assignment.addAssignment({adminId,deviceId,actions,contacts,context});
        const {message,assignmented} = addNewAssignment;
        res.send({message,assignmented})
    } catch (error) {
        console.log(error);
        res.status(401).send({message:error})
    }
}
export default {
    addAssignment
}