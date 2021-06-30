import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const AssignmentSchema = new Schema(
    {
        adminId:{type:String, required:true},
        deviceId:{type:String,required:true},
        actions:{type:String,required:true},
        contacts:{type:Array},
        context:{type:String,required:true}
    },
    {
        timestamps:true,
    }
);
AssignmentSchema.statics = {
    createAssignment(item){
        return this.create(item);
    }
}

const Assignment = mongoose.model('Assignment',AssignmentSchema);
export default Assignment;