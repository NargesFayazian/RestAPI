const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Order were feth"
    });
});

router.post('/', (req, res, next) => {
    const order={
        productId: req.body.productId,
        quantity:req.body.quantity
    }
    res.status(201).json({
        message: "Order was Created",
        order: order
    });
});

router.get('/:orderId', (req, res, next) => {
        res.status(200).json({
            message: 'Order Details' ,
            orderId: req.params.orderId
        });
});


router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product!' ,
        orderId: req.params.orderId
    });
});

module.exports=router;
