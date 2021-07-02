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
const getPhones = ({name})=>{
    return new Promise(async (resolve,reject)=>{
        try {
            const phones = await ContactModel.getPhonesByName(name);
            resolve(phones[0].phones);
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