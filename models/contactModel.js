import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const ContactSchema = new Schema(
    {
        adminId:{type:String, required:true},
        name:{type:String,required:true, unique:true},
        phones:{type:Array,required:true},
    },
    {
        timestamps:true,
    }
);
ContactSchema.statics = {
    createContact(item){
        return this.create(item);
    }
}

const Contact = mongoose.model('Contact',ContactSchema);
export default Contact;