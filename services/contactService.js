import ContactModel from "../models/contactModel.js";
import {transSuccess} from '../lang/vi.js';
const addContact = ({adminId,name,phones}) => {
    return new Promise(async (resolve, reject)=>{
        try {
            const status = await ContactModel.createContact({adminId,name,phones});
            resolve({message:transSuccess.add_contact_success})
        } catch (error) {
            reject(error)
        }
    })
}
export default {
    addContact
}