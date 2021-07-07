import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const ContactSchema = new Schema(
    {
        adminId:{type:String, required:true},
        name:{type:String,required:true, unique:true},
        phones:{type:Array,required:true},
        createdAt:{type:Number,default: Date.now()},
        updatedAt:{type:Number,default:null},
        deletedAt:{type:Number,default:null}
    }
);
ContactSchema.statics = {
    createContact(item){
        return this.create(item);
    },
    getPhonesByName(name){
        return this.find({name:name}).exec();
    },
    getAllNamePhonesById(id){
        return this.find({adminId:id}).exec();
    },
    findContactByName(name){
        return this.find({name:name}).exec();
    }
}

const Contact = mongoose.model('Contact',ContactSchema);
export default Contact;