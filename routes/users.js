const express = require('express')
const router = express.Router()
const  User = require('../models/user')  

router.get('/',async(req,res)=>{
    try{

        const users = await User.find()
        res.json(users)
    }
    catch(err){
        res.send('Error' + err)
    }
})

router.get('/:id',async(req,res)=>{
    try{

        const user = await User.findById(req.params.id)
        res.json(user)
    }
    catch(err){
        res.send('Error' + err)
    }


})


router.post('/',async(req,res) => {
    const user = new User({
        name : req.body.name,
        email:req.body.email,
        password:req.body.password,
        purchase_history:req.body.purchase_history        
    })

    try{
         const u1 = await user.save()
            res.json(u1)
        }
    catch(err){
        res.send('Error'+err)
    }
})

router.patch('/:id',async(req,res) =>{
    try{
            const user = await User.findById(req.params.id)
            user.email = req.body.email
            const u1 =await user.save()
            res.json(u1)
    }
    catch(err){
        res.send("Error" + err)
    }
})


router.put('/:id',async(req,res) =>{
    try{
            const user = await User.findByIdAndUpdate(req.params.id)
            user.email = req.body.email
            const u1 =await user.save()
            res.json(u1)
    }
    catch(err){
        res.send("Error" + err)
    }
})

router.delete('/:id',async(req,res) =>{
    try{
            const user = await User.findById(req.params.id)
            user.name = req.body.name
            const u1 =await user.remove()
            res.json(u1)
    }
    catch(err){
        res.send("Error" + err)
    }
})

module.exports=router