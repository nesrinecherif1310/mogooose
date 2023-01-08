const router=require ('express').Router()
const person = require ('../models/person-model')
router.post('/newperson',(req,res)=>{


const newperson = new person(req.body)
newperson.save()
.then (()=>res.send('person saved '))
.catch(err=>console.log(err))


})
//get : 
router.get('/person/:id',(req,res)=>{
    person.findById({_id:req.params.id},(err,data)=>err?console.log(err):res.json(data))                                          
})
//patch 
router.patch('/patch/:id',(req,res)=>{
    person.findOneAndUpdate({_id:req.params.id},{name:req.body.name},{new:true},(err,data)=>err?console.log(err):res.json(data))
})
//delet
router.delete('/delet/:id',(req,res)=>{
    person.findByIdAndRemove({_id:req.params.id},(err,data)=>err?console.log(err):res.json(data))
})



module.exports=router















//get bech tjibli page 
//post bech psoti data ba3thet haja lel base de donne
//put //patch => mise ajour lel data eli ena postitha deja
//delet hiya il tfsekh data eli ena postitha deja  <wQ