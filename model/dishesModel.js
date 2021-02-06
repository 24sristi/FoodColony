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

let dishesSchema = new mongoose.Schema({
  name : {
    type:String,
    required:true
  },
  Amount : {
    type:String ,
    required:true,
  },
  Image:{
    type:String,
    default:"/images/users/Avatar07.png",
    required:true
  },
  Details:{
    type:String,
    required:true
  },
  category:{
    type:String,
  }
})


const dishesModel = mongoose.model("dishesSchema" , dishesSchema);
module.exports = dishesModel;