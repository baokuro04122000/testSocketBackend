import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const AssignmentSchema = new Schema(
    {
        contactId:{type:Schema.Types.ObjectId, ref:'Contact'},
        adminId:{type:Schema.Types.ObjectId,ref:'User', required:true},
        deviceId:{type:Schema.Types.ObjectId,ref:'User',required:true},
        actions:{type:String,required:true},
        contacts:{type:Array,required:true},
        context:{type:String,required:true},
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
        .populate('contactId','name')
        .populate('adminId','username')
        .exec();
    }
}

const Assignment = mongoose.model('Assignment',AssignmentSchema);
export default Assignment;