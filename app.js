const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require("cookie-parser"); 
const userRouter = require('./router/userRouter');
const viewRouter = require('./router/viewRouter');
const dishesRouter = require('./router/dishesRouter');
const orderRouter = require('./router/orderRouter');
app.use( express.json());
app.use(cookieParser());
app.use(express.static(__dirname+"/public"));
// app.set("view engine" , "pug");
app.set("views" , path.join(__dirname,"View"));
// view engine set

app.set("view engine" , "ejs");
app.use("/user" , userRouter);
app.use("/dishes",dishesRouter)
app.use("/order",orderRouter)
app.use("",viewRouter)
let port = process.env.PORT || 3000
app.listen(port, function () {
    console.log("server started at port 3000");
  });
