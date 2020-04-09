const express =require('express');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const mongoose =require('mongoose');
const config =require('./config/config').get(process.env.NODE_ENV);

const app =express();


mongoose.Promise=global.Promise;
mongoose.connect(config.DATABASE);

const { User} =require('./models/user');
const { Book} = require('./models/book');
const { auth} =require('./middleware/auth');

app.use(bodyParser.json());
app.use(cookieParser());


//GET

app.get('/api/auth',auth,function(req,res){
    res.json({
        isAuth: true,
        id : req.user._id,
        email:req.user.email,
        name : req.user.name,
        lastname : req.user.lastname
    })
})



app.get('/api/logout',auth,function(req,res){
    req.user.deleteToken(req.token,(err,user)=>{
        if(err) return res.status(400).send(err);
        res.sendStatus(200);
    });


})


//get book
app.get('/api/getBook',function(req,res){
    let id =req.query.id;

    Book.findById(id,(err,doc)=>{
        if(err) return status(400).send(err);

        res.send(doc)
    })
})


app.get('/api/books',(req,res)=>{
    //localhost:3000/api/books?skip=3&limit=2&order=asc
    let skip=parseInt(req.query.skip);
    let limit =parseInt(req.query.limit);
    let order=req.query.order;

    //order =asc||dec
    Book.find().skip(skip).sort({_id:order}).limit(limit).exec((err,doc)=>{
        if(err) return status(400).send(err);
        res.send(doc);
    })

})

//get user
app.get('/api/getReviewer',function(req,res){
    let id =req.query.id;
    
    User.findById(id,(err,doc)=>{
            if(err) return res.status(400).send(err);
            res.json({
                name : doc.name,
                lastname : doc.lastname
            })
    })
})


app.get('/api/users',function(req,res){
    User.find({},(err,users)=>{
        res.status(200).send(users)
    })
})

app.get('/api/user_posts',function(req,res){
    Book.find({ownerId: req.query.user}).exec((err,doc)=>{
        if(err) return res.status(400).send(err);
        res.send(doc);
    })
})

//POST

//post books
app.post('/api/book',(req,res)=>{
    const book =new Book(req.body)

    book.save((err,doc)=>{
        if(err) return res.status(400).send(err);
        res.status(200).json({
            post : true,
            bookId : doc._id
        })
    })

})

//post users
app.post('/api/register',function(req,res){
    const user =new User(req.body);

    user.save((err,doc)=>{
        if(err) return res.json({ success : false});
        res.status(200).json({
            succes:true,
            user : doc
        })
    })
})


app.post('/api/login',function(req,res){

    User.findOne({'email':req.body.email},function(err,user){
        if(!user) return res.json({isAuth : false, message : ' Auth failed ,email not found'});

        user.comparePassword(req.body.password,(err,isMatch)=>{
            if(!isMatch) return res.json({ isAuth : false,message : "password doesn't match"});

        user.generateToken((err,user)=>{
            if(err) return res.status(400).send(err);
            res.cookie('auth',user.token).json({
                isAuth : true,
                id : user._id
                ,email : user.email
            })
        })    
        })

    })
})




//UPDATE

app.post('/api/book_update',(req,res)=>{
    Book.findByIdAndUpdate(req.body._id,req.body,{new: true},(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json({
            sucess :true,
            doc
        })
    })


})

//DELETE

app.delete('/api/delete_book',function(req,res){
    let id= req.query.id;
    Book.findByIdAndRemove(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json({
            succes :"true",
            doc
        });
    })
})










const port =process.env.PORT || 3000;
app.listen(port,()=>{
    console.log('server running')
})