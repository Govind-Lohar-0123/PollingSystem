import mongoose from "mongoose";

const quesSchema=mongoose.Schema({
    qNum:{type:Number,required:true},
    ques:{type:String,required:true},
    options:{type:Array,required:true},
    ans:{type:Number,required:true}
})

const quesModel=mongoose.model("question",quesSchema);
export default quesModel;