const mongoose=require('mongoose');
const tradesSchema=mongoose.Schema({
    id:{type:Number, unique:true},
    _type:{type:String},
    userId:{type:Number},
    UserName:{type:String},
    symbole:{type:String},
    shares:{ type: Number, min: 10, max: 30 },
    price:{type:Number},
    timestamp:{ type: Date, default: Date.now }
});

module.exports=mongoose.model('Trades',tradesSchema);