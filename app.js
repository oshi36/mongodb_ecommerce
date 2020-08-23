const express = require('express')
const mongoose = require('mongoose')
const url='mongodb://localhost/ecommerce'

const app = express()

mongoose.connect(url,{useNewUrlParser:true})

const con=mongoose.connection

con.on('open',()=>{
    console.log('connected...')
})

//const bodyParser = require("body-parser")
//app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json())

const userRouter = require('./routes/users')
app.use('/users',userRouter)

const categoryRouter = require('./routes/categories')
app.use('/categories',categoryRouter)

const productRouter = require('./routes/products')
app.use('/products',productRouter)

app.listen(9000,()=>{
    console.log('server started')
})