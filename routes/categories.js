const express = require('express')
const router = express.Router()
const  Category = require('../models/category')  
const category = require('../models/category')

router.get('/',async(req,res)=>{
    try{

        const categories = await Category.find()
        res.json(categories)
    }
    catch(err){
        res.send('Error' + err)
    }
})

router.get('/:id',async(req,res)=>{
    try{

        const category = await Category.findById(req.params.id)
        res.json(category)
    }
    catch(err){
        res.send('Error' + err)
    }


})


router.post('/',async(req,res) => {
    const category = new Category({
        categoryname : req.body.categoryname,
            })

    try{
         const c1 = await category.save()
            res.json(c1)
        }
    catch(err){
        res.send('Error'+err)
    }
})

router.patch('/:id',async(req,res) =>{
    try{
            const category = await Category.findById(req.params.id)
            category.categoryname = req.body.categoryname
            const c1 =await category.save()
            res.json(c1)
    }
    catch(err){
        res.send("Error" + err)
    }
})


router.put('/:id',async(req,res) =>{
    try{
            const category = await Category.findByIdAndUpdate(req.params.id)
            category.categoryname = req.body.categoryname
            const c1 =await category.save()
            res.json(c1)
    }
    catch(err){
        res.send("Error" + err)
    }
})

router.delete('/:id',async(req,res) =>{
    try{
            const category = await Category.findById(req.params.id)
            category.categoryname = req.body.categoryname
            const c1 =await category.remove()
            res.json(c1)
    }
    catch(err){
        res.send("Error" + err)
    }
})

module.exports=router