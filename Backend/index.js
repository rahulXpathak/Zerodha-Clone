const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const HoldingModel = require('./model/HoldingModel');

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase';
const app =  express();

app.get('/addHolding', async(req,res)=>{
    let tempHolding = [
        {
            name: 'rahul',
            qty: 10,
            avg: 100,
            price: 110,
            net: '1000',
            day: '5%',
        },
        {
            name: 'rahul2',
            qty: 20,
            avg: 200,   
            price: 220,
            net: '4000',
            day: '10%', 
        },
        {
            name: 'rahul3',
            qty: 30,
            avg: 300,
            price: 330,
            net: '9000',
            day: '15%',
        },
        {
            name: 'rahul4',
            qty: 40,
            avg: 400,
            price: 440,
            net: '16000',
            day: '20%',
        },
    ];


    tempHolding.forEach((items) =>{
        let newHolding = new HoldingModel({
            name: items.name,
            qty: items.qty,
            avg: items.avg, 
            price: items.price,
            net: items.net,
            day: items.day,
        });
        newHolding.save();  
    });   
    res.send('holdings added'); 
});

app.listen(PORT, ()=>{
    console.log(`app is running port ${process.env.PORT}`);
    mongoose.connect(MONGO_URI);
    console.log('db started');
})

