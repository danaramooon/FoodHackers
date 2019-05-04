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
    author:String
});
const Comment = mongoose.model('Comment',{
    dish:String,
    content:String,
    author:String
});
const Dish = mongoose.model('Dish',{
    receipt:[String],
    name:String,
    description:String,
    image:String,
    author:String
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




//Answers
async function getUser(author) {
  return await User.findOne({ _id:author}, function (err, person) {
    if (err) return handleError(err);
   // console.log(person);
    return person
});
}
app.get('/dishs', (req, res) => {
    Dish.find({}, (err, dishs) => {
        
        if (err)
            return res.json({status: 'error', data: err});
        var result=[];
        
        for (var i = 0; i < dishs.length; i++) {
            console.log(getUser(dishs[i].author));
            dishs[i].author=getUser(dishs[i].author);
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




app.listen(8000, () => {
    console.log("Started");
});