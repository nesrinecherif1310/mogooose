const mongoose=require('mongoose');



var personschema= mongoose.Schema({
    name: String ,
    age : Number ,
    favoriteFoods:[String]



})
module.exports=mongoose.model('person',personschema)