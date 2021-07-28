import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const ContactSchema = new Schema(
    {
        adminId:{type:Schema.Types.ObjectId, required:true},
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
        return this.find({adminId:id}).sort(
            {"createdAt":-1}).exec();
    },
    findContactByName(name){
        return this.find({name:name}).exec();
    },
    deleteContactById(contactId){
        return this.deleteOne({
            "_id":contactId
        }).exec();
    }, 
    updateContactById(contactId, contacts, name){
        return this.updateOne({"_id":contactId},{
            name:name,
            phones:contacts,
            updatedAt:Date.now()
        }).exec();
    }
}

const Contact = mongoose.model('Contact',ContactSchema);
export default Contact;