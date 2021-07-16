import {assignment} from '../../services/index.js';

const addAssignment =async (req,res) => {
    const {contactsName,adminId,deviceId,actions,contacts,content} = req.body;
    try {
        const addNewAssignment = await assignment.addAssignment({contactsName,adminId,deviceId,actions,contacts,content});
        const {message,assignmented} = addNewAssignment;
        res.send({message,assignmented})
    } catch (error) {
        console.log(error);
        res.status(401).send({message:error})
    }
}
const getInfoDeviceOfAdmin =async (req,res) => {
    const {adminId} = req.body;
    try {
        const devicesInfo = await assignment.getDevicesOfAdmin({adminId});
        res.send(devicesInfo);
    } catch (error) {
        console.log(error);
        res.status(401).send({message:error})
    }
}
const getDetailsAssignment = async (req,res) => {
    const {id} = req.params;
    const adminId = req.user._id;
    try {
        const detailsAssignment = await assignment.getDetailsAssignment(id, adminId);
        res.send(detailsAssignment)
    } catch (error) {
        console.log(error);
        res.status(401).send({message:error});
    }
}
export default {
    addAssignment,
    getInfoDeviceOfAdmin,
    getDetailsAssignment
}