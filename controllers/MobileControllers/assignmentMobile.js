import {assignment} from '../../services/index.js';

const updateContactsMB =async (req,res) => {
    const {contacts, assignmentId} = req.body;
    try {
        const updated = await assignment.updateContactsMB(assignmentId, contacts);
        res.send({
            status:200,
            success:'successful updating'
        })
    } catch (error) {
        res.status(401).send(error)
    }
} 

export default {
    updateContactsMB
}