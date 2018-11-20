


const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const jiu_schema=new Schema({
	time:{type:String},
	name:{type:String,required:true},
	img:{type:String,required:true},
	type:{type:String,required:true},
	title:{type:String,required:true},
	price:{type:String,required:true}
	// page:{type:Number},
	// num:{type:Number}
});
const jiu_model=mongoose.model('table',jiu_schema);
module.exports=jiu_model;













