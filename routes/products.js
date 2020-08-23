const express = require('express')
const router = express.Router()
const  Product = require('../models/product')  

router.get('/',async(req,res)=>{
    try{

        const products = await Product.find()
        res.json(products)
    }
    catch(err){
        res.send('Error' + err)
    }
})

router.get('/:id',async(req,res)=>{
    try{

        const product = await Product.findById(req.params.id)
        res.json(product)
    }
    catch(err){
        res.send('Error' + err)
    }


})


router.post('/',async(req,res) => {
    const product = new Product({
                
        product_name : req.body.product_name,
        decscription:req.body.description,
        price:req.body.price,
        //category: category._id,        
        quantity:req.body.quantity        
        
    })

    try{
         const p1 = await product.save()
            res.json(p1)
        }
    catch(err){
        res.send('Error'+err)
    }
})

router.patch('/:id',async(req,res) =>{
    try{
            const product = await Product.findById(req.params.id)
            product.product = req.body.price
            const p1 =await product.save()
            res.json(p1)
    }
    catch(err){
        res.send("Error" + err)
    }
})


router.put('/:id',async(req,res) =>{
    try{
            const product = await Product.findByIdAndUpdate(req.params.id)
            product.product_name = req.body.product_name
            const p1 =await product.save()
            res.json(p1)
    }
    catch(err){
        res.send("Error" + err)
    }
})

router.delete('/:id',async(req,res) =>{
    try{
            const product = await Product.findById(req.params.id)
            product.product_name = req.body.product_name
            const p1 =await product.remove()
            res.json(p1)
    }
    catch(err){
        res.send("Error" + err)
    }
})

module.exports=router