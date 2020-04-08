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
        type : Number,
        default : 'n/a'
    },
    rating:{
        
    },
    price:{

    },
    ownerId: {

    }
},{timsestamps: true})

const Book =mongoose.model('Book', bookSchema);
module.exports={Book}