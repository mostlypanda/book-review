const express =require('express');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const mongoose =require('mongoose');
const config =require()

const app =express();


mongoose.Promise=global.Promise;
mongoose.connect()

const port =process.env.PORT || 3000;
app.listen(port,()=>{
    console.log('server running')
})