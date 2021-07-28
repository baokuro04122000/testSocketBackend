import {contact} from '../../services/index.js';

const addContact =async (req,res) => {
    const {adminId,name,phones} = req.body;
    try {
        const addNewContact = await contact.addContact({adminId,name,phones});
        const {message} = addNewContact;
        res.send({message})
    } catch (error) {
        res.status(401).send({message:error})
    }
}
const getPhones = async (req,res) => {
    const {name} = req.body;
    try {
        const phones = await contact.getPhones({name});
        res.send(phones)
    } catch (error) {
        res.status(401).send({message:error})
    }
}
const getAllNamePhones = async (req,res) => {
    const {id} = req.body;
    try {
        const data = await contact.getAllNamePhones({id});
        res.send(data)
    } catch (error) {
        console.log(error);
        res.status(401).send({message:error})
    }
}
const deleteContact =async (req,res) => {
    const {contactId} = req.params;
    try {
        const deleted = await contact.deleteContact(contactId);
        res.send(deleted);
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success:false,
            message:error
        })
    }
}
const updateContact =async (req,res) => {
    const {contactId, contacts, name} = req.body;
    try {
        const updated = await contact.updateContact(contactId, contacts, name);
        console.log(updated);
        res.send(updated)
    } catch (error) {
        console.log(error);
        res.status(401).send({
            status:401,
            success:false,
            message:error
        })
    }
}
export default {
    addContact,
    getPhones,
    getAllNamePhones,
    deleteContact,
    updateContact
}