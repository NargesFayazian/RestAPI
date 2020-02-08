const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "handeling get req"
    });
});

router.post('/', (req, res, next) => {
    const product={
        name :req.body.name,
        price:req.body.price
    }
    res.status(201).json({
        message: "handeling post req",
        createProduct : product 
    });
});

router.get('/:productId', (req, res, next) => {
    const id =req.params.productId;
    if (id==='special'){
        res.status(200).json({
            message: 'You discovered the Special ID' ,
            id: id
        });
    }else{
        res.status(200).json({
            message: 'You Passed an ID' 
        });
    }
});
router.patch('/:productId', (req, res, next) => {
        res.status(200).json({
            message: 'Updata product!' ,
        });
        
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product!' ,
        id: id
    });
});

module.exports=router;
