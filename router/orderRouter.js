const express = require("express");
const { getAllOrder, addOrder, deleteOrder, addcart } = require("../controller/orderController");
const { isLoggedIn} = require("../controller/authController");

let orderRouter = express.Router();

orderRouter.use(isLoggedIn);

orderRouter.post("/add",addOrder);
orderRouter.post("/getAllOrder", getAllOrder);
orderRouter.post("/deleteOrder", deleteOrder);
orderRouter.post("/cart/add",addcart);

module.exports = orderRouter;
