const mongoose = require("mongoose");
const DB_LINK = process.env.DB_LINK;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose
  .connect(
    DB_LINK,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((db) => {
    console.log("Connected to db !!!");
  });

let OrderSchema = new mongoose.Schema({
  name : {
    type:String,
    required:true
  },
  amount : {
    type:String ,
    required:true,
  },
  address:{
    type:String,
    required:true
  },
  dishes:{
    type:String,
    required:true
  }
})


const OrdereModel = mongoose.model("OrderSchema" , OrderSchema);
module.exports = OrdereModel;