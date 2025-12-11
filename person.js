import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
    name : {type :String, required : true, length : 50},
    age : {type : Number, required : true, min : 0, max : 120},
    work : {type : String, required : true, enum:['chef', 'waiter', 'manager']},
    mobile : {type : String, required : true, length : 10},
    email: {type : String, required : true, unique : true},
    address: {type : String, required : true, length : 200},
    salary: {type : Number, required : true, min : 0}
});

const Person = mongoose.model('Person', personSchema);
export default Person;