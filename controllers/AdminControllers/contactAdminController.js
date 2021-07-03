import {contact} from '../../services/index.js';

const addContact =async (req,res) => {
    const {adminId,name,phones} = req.body;

    try {
        const addNewContact = await contact.addContact({adminId,name,phones});
        const {message} = addNewContact;
        res.send({message})
    } catch (error) {
        res.send({message:error})
    }
}
const getPhones = async (req,res) => {
    const {name} = req.body;
    try {
        const phones = await contact.getPhones({name});
        res.send(phones)
    } catch (error) {
        res.send({message:error})
    }
}
const getAllNamePhones = async (req,res) => {
    const {id} = req.body;
    try {
        const names = await contact.getAllNamePhones({id});
        res.send({names})
    } catch (error) {
        res.send({message:error})
    }
}
export default {
    addContact,
    getPhones,
    getAllNamePhones
}