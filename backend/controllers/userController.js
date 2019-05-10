const User = require('../models/user');
const express=require('express');
const jwt=require('jsonwebtoken');
const user=require('../models/user');
const key=require("../key");

const app=express();

app.use(require('body-parser').json());

exports.create = (req, res) => {

    if(!req.body.username || !req.body.password) {
        return res.status(400).send({
            message: "Invalid parameters"
        });
    }

    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    user.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    });
}

exports.login = (req,res) =>{
    user.findOne({username:req.body.username}).then((user)=>{
            user.comparePassword(req.body.password,(err,isMatch)=>{
                if(isMatch){
                    console.log("login success");
                    var token=jwt.sign({userId:user.id}, key.tokenKey);
                    res.status(200).json({
                        userId:user.id,
                        username: user.username,
                        token
                    })
                }
                else{
                    res.status(400).json({message:'Invalid Password/Username'});
                }
            })
    }).catch((err)=>{
        res.status(400).json({message:'Invalid Password/Username'});
    })
};

exports.findOne = (req, res) => {
    User.findById(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });            
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving user with id " + req.params.userId
        });
    });
};