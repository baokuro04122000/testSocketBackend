import AssignmentModel from "../models/assignmentModel.js";
import {transSuccess} from '../lang/vi.js';
const addAssignment = ({contactsName,adminId,deviceId,actions,contacts,content}) => {
    return new Promise(async (resolve,reject)=>{
        try {
            const assignmented = await AssignmentModel.createAssignment({contactsName,adminId,deviceId,actions,contacts,content});
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

const getDetailsAssignment = (id, adminId) => {
    return new Promise(async (resolve, reject)=>{
        try {
            const assignmented = await AssignmentModel.getDetailsByIdAndAdminId(id,adminId);
            resolve(assignmented);
        } catch (error) {
            reject(error);
        }
    })
}
export default {
    addAssignment,
    getDevicesOfAdmin,
    getDetailsAssignment
}