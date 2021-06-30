import AssignmentModel from "../models/assignmentModel.js";
import {transSuccess} from '../lang/vi.js';
const addAssignment = ({adminId,deviceId,actions,contacts,context}) => {
    return new Promise(async (resolve,reject)=>{
        try {
            const assignmented = await AssignmentModel.createAssignment({adminId,deviceId,actions,contacts,context});
            resolve({message:transSuccess.add_assignment_success,assignmented})
        } catch (error) {
            reject(error)
        }
    })
}
export default {
    addAssignment
}