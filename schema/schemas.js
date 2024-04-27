const mongoose = require("mongoose");
const LoginSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  stdId: { type: Number, unique: true, required: true },
  last_login: { type: Number },
  login_attemps: { type: Number },
});

const StudentSchema = new mongoose.Schema({
     name:{type:String,required:true},
     courseId:{type:Number,required:true},
     email:{type:String,required:true},
     gender:{type:String},
     year:{type:Number,required:true},
     semester:{type:Number,required:true},
     dob:{type:String},
     countryOrigin:{type:String},
     address:{type:String},
     fatherName:{type:String},
     stdId:{type:Number,required:true,unique:true},
     enrollmentNo:{type:String,required:true,unique:true},
     mobileNo:{type:String},
     deptId:{type:Number,required:true},
})


module.exports = {LoginSchema,StudentSchema};