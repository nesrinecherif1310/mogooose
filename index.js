
const express = require('express');
const mongoose = require('mongoose');
const personrouter = require('./router/person-router');
const app =express()

mongoose.connect('mongodb://127.0.0.1:27017/nesrine',{useNewUrlParser: true,useUnifiedTopology: true})
.then(res=> console.log('db connected'))
.catch(err=>console.log(err))
app.use(express.json())
//pour lire le json
app.use(express.urlencoded({extended:true}))
//lire les forme *html 



app.use('/',personrouter)
app.listen(3000,()=>{
   console.log('serveur marche')
})


