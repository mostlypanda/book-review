const mongoose =require('mongoose');

const bookSchema= mongoose.Schema({
    name :{
        type : String,
        required: true
    },
    author:{
        type : String,
        required: true

    },
    review:{
        type : String,
        default : 'n/a'

    },
    pages:{
        type : String,
        default : 'n/a'
    },
    rating:{
        type : Number
        required: ''
    },
    price:{

    },
    ownerId: {

    }
},{timsestamps: true})

const Book =mongoose.model('Book', bookSchema);
module.exports={Book}