const config={
    production :{
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI,
    },
    default : {
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI,
    }
}