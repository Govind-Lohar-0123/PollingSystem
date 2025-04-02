import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    stu_name:{type:String},
    ques:{type:Array,required:true}
})

const studentModel = mongoose.model("student", studentSchema);
export default studentModel;