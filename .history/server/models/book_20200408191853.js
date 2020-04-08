const mongoose =require('mongoose');

const bookSchema= mongoose.Schema({
    name :{
        
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
}, {timsestamps: true})