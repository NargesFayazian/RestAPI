//npm install express , morgan(show log),body-parser



const express= require('express');
const app = express();
const morgan =require('morgan');
const productRoutes=require('./api/routes/products');
const orderRoutes=require('./api/routes/order');
const bodyParser=require('body-parser')
const mongoose= require('mongoose');
//show log
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/product', 
{ useNewUrlParser: true,  useUnifiedTopology: true 
});

//rout
app.use('/products',productRoutes);
app.use('/order',orderRoutes);



//error
app.use((req,res,next)=>{
    const error = new Error('Not Found');
    error.status=404;
    next(error);
});
// app.use((error,req,res,next)=>{
// res.status(err.status||500);
// res.json({
//     error:{
//         message:error.message
//     }
// });
// });



module.exports=app;