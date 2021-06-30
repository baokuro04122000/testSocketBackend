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
export default {
    addContact
}