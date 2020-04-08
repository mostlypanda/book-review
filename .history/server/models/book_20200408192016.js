const mongoose =require('mongoose');

const bookSchema= mongoose.Schema({
    name :{
        type : String,
        re
    },
    author:{

    },
    review:{

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