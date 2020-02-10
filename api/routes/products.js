const express = require('express');
const mongoose=require('mongoose');
const router = express.Router();
const Product= require('../models/product')

// ===================Get======================================================================
router.get('/', (req, res, next) => {
    
    //befor DB
    // res.status(200).json({
    //     message: "handeling get req"
    // });

Product.find()
.exec()
.then(docs=>{
    console.log(docs);
    if (docs.length>=0){
        res.status(200).json(docs);
    }else{
        res.status(404).json({
            message:"no entries found"
        });
    }
})
.catch(err=>{
    console.log(err);
    res.status(500).json({
        error:err
    });
});
});


// ==========================================post==========================================
router.post('/', (req, res, next) => {
    
const product=new Product({
    _id:new mongoose.Types.ObjectId(),
    name:req.body.name,
    price:req.body.price
});
product.save().then(result=>{
    console.log(result);
})
     .catch(err=>console.log(err));
    res.status(201).json({
        message: "handeling post req",
        createProduct : product 
    });
});

router.get('/:productId', (req, res, next) => {
    const id =req.params.productId;
    Product.findById(id)
    .then(doc=>{
        console.log("from db",doc);
        if (doc){
            res.status(200).json(doc);
        }else{
            res.status(404).json({message:"invalid id "}); 
        }
        
        })
    .catch(err=>{
        console.log(err);
        res.status(500).json({error:err});
    });
//befor use DB
//     if (id==='special'){
//         res.status(200).json({
//             message: 'You discovered the Special ID' ,
//             id: id
//         });
//     }else{
//         res.status(200).json({
//             message: 'You Passed an ID' 
//         });
//     }
 });


//=============================patch============================================================================
router.patch('/:productId', (req, res, next) => {
       
    //befor DB
    // res.status(200).json({
        //     message: 'Updata product!' ,
        // });
const id=req.params.ProductId;
const updateOps={};
for (const ops of req.body.name){
    updateOps[ops.propName]=ops.value;
}
        Product.update({_id:id},{$set:/*name:req.body.newname,...*/updateOps})
        .exec()
        .then(result=>{
            console.log(result);
            res.status(200).json(result);
        })
.catch(err=>{
    console.log(err);
    res.status(500).json({
        error:err
    })
});
});  

//============================delete=========================================================================
router.delete('/:productId', (req, res, next) => {
   
//    befor DB
    // res.status(200).json({
    //     message: 'Deleted product!' ,
    //     id: id
    // });


    const id =req.params.ProductId;
        Product.remove({_id:id})
        .exec()
        .then( result=>{res.status(200).json(result)})
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error:err
            });
        });
});

module.exports=router;