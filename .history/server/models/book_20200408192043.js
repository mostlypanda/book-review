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
        default : 

    },
    pages:{

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