//Creating Database Schema & Collection Here To Post Data Of players with the details
//With the help of following creation, our collection will be created with the fields bydefault
//Our collection name will be uefa_details in the MyDB database

const express =require("mongoose")

const mongoose = require("mongoose");
const UEFA = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    Name:{
        type:String,
        required:true,
        trim:true
    },
    Goals:{
        type:Number,
        required:true,
        trim:true
    },
    Yellow_Card:{
        type:Number,
        required:true,
        trim:true
    },
    Red_Card:{
        type:Number,
        required:true,
        trim:true
    },
    Played:{
        type:Number,
        required:true,
        trim:true
    },
    Win:{
        type:Number,
        required:true,
    },
    Lost:{
        type:Number,
        required:true,
    },
    Draw:{
        type:Number,
        required:true,
    },
    Penalty:{
        type:Number,
        required:true,
        trim:true
    }
})


const UEFA_Details = new mongoose.model("UEFA_Details",UEFA)

module.exports = UEFA_Details


