import mongoose from 'mongoose';
const schema=new mongoose.Schema({teamCode:{type:String,required:true,unique:true,trim:true},name:{type:String,required:true,trim:true}},{timestamps:true});
export default mongoose.model('Team',schema);
