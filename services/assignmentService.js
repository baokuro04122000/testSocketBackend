import AssignmentModel from "../models/assignmentModel.js";
import {transSuccess} from '../lang/vi.js';
const addAssignment = ({contactId,adminId,deviceId,actions,contacts,context}) => {
    return new Promise(async (resolve,reject)=>{
        try {
            const assignmented = await AssignmentModel.createAssignment({contactId,adminId,deviceId,actions,contacts,context});
            resolve({message:transSuccess.add_assignment_success,assignmented})
        } catch (error) {
            reject(error)
        }
    })
}
const getDevicesOfAdmin = ({adminId}) => {
    return new Promise(async (resolve, reject) => {
        try {
            const devices = await AssignmentModel.getInfoDeviceOfAdmin(adminId);
            resolve(devices);  
        } catch (error) {
            reject(error);
        }
    })
}
export default {
    addAssignment,
    getDevicesOfAdmin
}