import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const Schema = mongoose.Schema;

export const UserSchema = new Schema(
    {
        username:{type:String, required:true},
        deviceId:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        isAdmin : {type:Boolean , default: false , required:true},
        status:{type:Boolean, default:false}
    },
    {
        timestamps:true,
    }
);
UserSchema.statics = {
    createUser(item){
        return this.create(item);
    },
    findUserByDeviceId(deviceId){
        return this.findOne({"deviceId":deviceId}).exec();
    },
    findUserByUsername(username){
        return this.findOne({"username":username}).exec();
    },
    findUserByIdToSessionToUse(id){
        return this.findOne({"_id":id},{"password":0}).exec();
    },
    findAllDevices(){
        return this.find({isAdmin:false},{"password":0}).exec();
    },
    deleteUserByUsername(username){
        return this.deleteOne({"username":username}).exec();
    }
}
UserSchema.methods = {
    comparePassword(password){
        //return a promise has result is true or false
        return bcrypt.compare(password,this.password);
    }

}
const User = mongoose.model('User',UserSchema);
export default User;