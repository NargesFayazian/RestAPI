const express = require('express');
const mongoose=require('mongoose');
const router = express.Router();
const Trades= require('../models/trades');


// =========================================================================================
router.get('/erase', (req, res, next) => {
    Trades.remove()
    .exec()
    .then( result=>{res.status(200).json()
    .catch(err=>{
        console.log(err);
        res.status(400).json({
            error:err
        });
    });
});
});

//=============================================================================================
router.post('/trades', (req, res, next) => {
    
    const trades=new Trades({
        id:req.body.id,
        _type:req.body.type,
        userId:req.body.user.id,
        UserName:req.body.user.name,
        symbole:req.body.symbole,
        shares:req.body.shares,
        price:req.body.price,
        timestamp:req.body.timestamp
    });
    trades
    .save()
    .then(function(doc) {
    res.status(201).json(doc);
      })
      .catch(err=>{
        res.status(400).json({
            error:err
        });
    });
    });
//=============================================================================
router.get('/trades', (req, res, next) => {
Trades.find({}).sort(id)
.exec()
.then(function(doc) {
  
  res.status(200).json(doc);
})
.catch(err=>{
    res.status(404).json({
        error:err
    });
});
});

// ====================================================================================


router.get('/trades/users/:userId',(req, res, next) => {
    const id =req.params.userId;
    console.log(id)
    Trades.find({userId:id}).sort(id)
    .exec()
.then(function(doc) {
  
  res.status(200).json(doc);
})
.catch(err=>{
    res.status(404).json({
        error:err
    });
});
});
//==============================================================================================
router.get('/trades/stocks/:stockSymbol',(req, res, next) => {
    const symbole =req.params.stockSymbol;
    Trades.find({symbole:symbole}).sort(id)
    .exec()
.then(function(doc) {
  
  res.status(200).json(doc);
})
.catch(err=>{
    res.status(404).json({
        error:err
    });
});
});
//==============================================================================================
router.get('/trades/users/:userId/stocks/:stockSymbol',(req, res, next) => {
    const id =req.params.userId;
    const symbole =req.params.stockSymbol;
    Trades.find({symbole:symbole,userId:id}).sort(id)
    .exec()
.then(function(doc) {
  res.status(200).json(doc);
})
.catch(err=>{
    res.status(404).json({
        error:err
    });
});
});

module.exports=router;
