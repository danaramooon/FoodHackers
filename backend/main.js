const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;

passport.use(new BasicStrategy((username, password, done) => {
    User.findOne({username: username, password: password}, (err, user) => {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        return done(null, user);
    })
}));

const Answer = mongoose.model('Answer',{
    content:String,
    comment:String,
    author:String,
    created_at: {type: Date, default: Date.now}
});
const Comment = mongoose.model('Comment',{
    dish:String,
    content:String,
    author:String,
    created_at: {type: Date, default: Date.now}
});
const Dish = mongoose.model('Dish',{
    receipt:[String],
    name:String,
    description:String,
    image:String,
    author:String,
    
});
const Food = mongoose.model('Food', {
    name:String
});

const User = mongoose.model('User', {
    username: {type: String, unique: true},
    password: String
});

mongoose.connect('mongodb://localhost:27017/nodekb', {useNewUrlParser: true});


//АВТОРИЗАЦИЯ

app.get('/users/me',
    passport.authenticate('basic', { session: false }),
    (req, res) => {
    
    let userId = req.user._id;
    
    User.findOne({_id: userId}, (err, user) => {
        if (err)
            return res.json({status: 'error', data: err});

        return res.json({status: 'ok', data: user})
    })
});

app.post('/users/register',
    (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    
    if (!username || !password)
        return res.json({status: 'error', data: 'Invalid params'});

    User.create({username: username, password: password}, (err, user) => {
        if (err)
            return res.json({status: 'error', data: err});

        return res.json({status: 'ok'})
    })
});

// FOODS
app.get('/foods', (req, res) => {
	
    Food.find({}, { _id: 1,name:1 },{sort: {name: 1}} ,(err, foods) => {
        
        if (err)
            return res.json({status: 'error', data: err});
        
        return res.json({status: 'ok', data: foods});
    })
}); 
app.post('/foods',
    passport.authenticate('basic', { session: false }),
    (req, res) => {
    let name = req.body.name;

    
    
    Food.create({name:name}, (err, food) => {
        if (err)
            return res.json({status: 'error', data: err});
        
        return res.json({status: 'ok', data: food})
    })
});
app.delete('/foods/:id',
    passport.authenticate('basic', { session: false }),
    (req, res) => {
    
    let id = req.params.id;

    
    
    Food.deleteOne({_id: id}, (err) => {
        if (err)
            return res.json({status: 'error', data: err});

        return res.json({status: 'ok'})
    })
});
//Dishes


//get user by id
 function getUser(author) {
  return User.findOne({ _id:author}, function (err, person) {
    if (err) return handleError(err);
 
    return person._id,person.username
});
}

//get dish by id
function getDish(id) {
  return Dish.findOne({ _id:id}, function (err, dish) {
    if (err) return handleError(err);
 
    return dish
});
}


app.get('/dishs', (req, res) => {
     Dish.find({}, async (err, dishs) => {
        
        if (err)
            return res.json({status: 'error', data: err});
        var result=[];
        
        for (var i = 0; i < dishs.length; i++) {
            console.log(getUser(dishs[i].author));
            dishs[i].author= await getUser(dishs[i].author);
        }
        

        return res.json({data:dishs})
    })
});

app.post('/dishs',
    passport.authenticate('basic', { session: false }),
    (req, res) => {
    let name = req.body.name;
    let description = req.body.description;
    let receipt = req.body.receipt;
    let author = req.user._id;
    let image=req.body.image;
    if (!name || !description || !receipt || !author || !image )
        return res.json({status: 'error', data: 'Invalid params'});
    for (var i = 0; i < receipt.length; i++) {
        let name=req.body.receipt[i];
        Food.count({name:name},function(err, c) {
           if(c==0){
            
              Food.create({name:name}, (err, food) => {
                if (err) return res.json({status: 'error', data: err});
                else
                    
                console.log(food);
                });

            }
        }
    );
          }
    Dish.create({name:name,description:description,receipt:receipt,image:image,author:author}, (err, dish) => {
        if (err)
            return res.json({status: 'error', data: err});

        return res.json({name:dish.name,description:dish.description,receipt:dish.receipt,author:req.user,image:dish.image})
    })
});
app.delete('/dishs/:id',
    passport.authenticate('basic', { session: false }),
    (req, res) => {
    
    let id = req.params.id;

    
    
    Dish.deleteOne({name: id}, (err) => {
        if (err)
            return res.json({status: 'error', data: err});

        return res.json({status: 'ok'})
    })
});

app.get('/dishs/:id', (req, res) => {
    let id = req.params.id;
         Dish.findOne({_id:id}, async (err, dish) => {
           
       
        let author1 = await getUser(dish.author);
        dish.author=author1;
       
         
        return res.json({data:dish});

        
    })
});
//Comments
app.get('/dishs/:id/comments', (req, res) => {
    let id = req.params.id;
    console.log(id);     
Comment.find({ dish:id}, function (err, comments) {
    if (err) return handleError(err);
    
    return  res.json(comments)
        
    })
});

app.post('/dishs/:id/comments',
    passport.authenticate('basic', { session: false }),
   async (req, res) => {
    let content = req.body.content;
    console.log("content is: "+content);
    let author = req.user.username;
    let dish =await getDish(req.params.id);
        console.log("dish is: "+dish)
    if (!content )
        return res.json({status: 'error', data: 'Invalid params'});
    
          
    Comment.create({content:content,dish:req.params.id,author:author}, (err, comment) => {
        

        return res.json({content:comment.content,dish:dish,author:req.user,created_at:comment.created_at})
    })
});
app.delete('/comments/:id',
    passport.authenticate('basic', { session: false }),
    (req, res) => {
    
    let id = req.params.id;

    
    
    Comment.deleteOne({_id: id}, (err) => {
        if (err)
            return res.json({status: 'error', data: err});

        return res.json({status: 'ok'})
    })
});


//answers

app.get('/comments/:id/answers', (req, res) => {
    let id = req.params.id;
    console.log(id);     
Answer.find({ comment:id}, function (err, answers) {
    if (err) return handleError(err);
    
    return  res.json(answers)
        
    })
});
app.post('/comments/:id/answers',
    passport.authenticate('basic', { session: false }),
   async (req, res) => {
    let content = req.body.content;
    
    let author = req.user.username;
    
        if (!content )
        return res.json({status: 'error', data: 'Invalid params'});
    
          
    Answer.create({content:content,comment:req.params.id,author:author}, (err, answer) => {
        

        return res.json({content:answer.content,comment:answer.comment,author:answer.author,created_at:answer.created_at})
    })
});
app.delete('answers/:id',
    passport.authenticate('basic', { session: false }),
    (req, res) => {
    
    let id = req.params.id;

    
    
    Answer.deleteOne({_id: id}, (err) => {
        if (err)
            return res.json({status: 'error', data: err});

        return res.json({status: 'ok'})
    })
});



app.listen(8000, () => {
    console.log("Started");
});