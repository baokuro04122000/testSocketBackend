import ContactModel from "../models/contactModel.js";
import {transSuccess,transErrors} from '../lang/vi.js';
const addContact = ({adminId,name,phones}) => {
    return new Promise(async (resolve, reject)=>{
        try {
            const contactCreated = await ContactModel.findContactByName(name);
            if(contactCreated.length) throw reject(transErrors.contact_add_existed)
            const status = await ContactModel.createContact({adminId,name,phones});
            resolve({message:transSuccess.add_contact_success,data:status})
        } catch (error) {
            reject(error)
        }
    })
}
const getPhones = ({name})=>{
    return new Promise(async (resolve,reject)=>{
        try {
            const phones = await ContactModel.getPhonesByName(name);
            resolve(phones[0]);
        } catch (error) {
            reject(error)
        }
    })
}
const getAllNamePhones = ({id}) => {
    return new Promise(async (resolve,reject)=>{
        let names=[];
        try {
            const data = await ContactModel.getAllNamePhonesById(id);
            data.map((device)=>names.push(device.name));
            resolve(names);
        } catch (error) {
            reject(error)   
        }
    })
}
export default {
    addContact,
    getPhones,
    getAllNamePhones
}