const express= require('express');
const app = express();

const tradesRoutes=require('./api/routes/trades');


const morgan =require('morgan');
const bodyParser=require('body-parser')
const mongoose= require('mongoose');
//show log
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//   connect db
mongoose.connect('mongodb://localhost:27017/trades', 
{ useNewUrlParser: true,  useUnifiedTopology: true 
});
mongoose.Promise=global.Promise;

//=======================================




//rout
app.use('/trades',tradesRoutes);



//error
// app.use((req,res,next)=>{
//     const error = new Error('Not Found');
//     error.status=404;
//     next(error);
// });
// app.use((error,req,res,next)=>{
// res.status(err.status||500);
// res.json({
//     error:{
//         message:error.message
//     }
// });
// });



module.exports=app;