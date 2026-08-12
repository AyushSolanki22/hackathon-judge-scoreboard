import mongoose from 'mongoose';
const schema=new mongoose.Schema({
 team:{type:mongoose.Schema.Types.ObjectId,ref:'Team',required:true},
 judge:{type:mongoose.Schema.Types.ObjectId,ref:'Judge',required:true},
 innovation:{type:Number,min:1,max:10,required:true},
 codeQuality:{type:Number,min:1,max:10,required:true},
 presentation:{type:Number,min:1,max:10,required:true},
 submittedAt:{type:Date,default:Date.now}
},{timestamps:true});
schema.index({team:1,judge:1},{unique:true});
export default mongoose.model('Score',schema);
