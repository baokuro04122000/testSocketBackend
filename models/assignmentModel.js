import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const AssignmentSchema = new Schema(
    {
        adminId:{type:Schema.Types.ObjectId,ref:'User', required:true},
        deviceId:{type:Schema.Types.ObjectId,ref:'User',required:true},
        contactsName:{type:Array,required:true},
        actions:{type:String,required:true},
        contacts:{type:Array,required:true},
        content:{type:String,required:true},
        createdAt:{type:Number,default: Date.now()},
        updatedAt:{type:Number,default:null},
        deletedAt:{type:Number,default:null}
    }
);
AssignmentSchema.statics = {
    createAssignment(item){
        return this.create(item);
    },
    getInfoDeviceOfAdmin(id){
        return this.find({adminId:id})
        .populate('deviceId','username')
        .populate('adminId','username')
        .exec();
    },
    getDetailsByIdAndAdminId(id, adminId){
        return this.findOne({$and:[
            {_id:id},
            {adminId:adminId}
        ]})
        .populate('deviceId','username')
        .populate('adminId','username')
        .exec();
    },


    // process API for mobile
    updateContactsMobile(assignmentId, contacts){
        return this.updateOne({_id:assignmentId},{contacts:contacts}).exec();
    }
}

const Assignment = mongoose.model('Assignment',AssignmentSchema);
export default Assignment;