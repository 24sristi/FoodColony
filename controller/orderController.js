const SECRET_KEY = process.env.SECRET_KEY;
const jwt = require("jsonwebtoken");
const OrdereModel = require("../model/pendingOrderModel");

async function getAllOrder(req, res) {
  try {
    let dishes = await OrdereModel.find({});
    res.status(200).json({
      message: "Got all order successfully !!",
      data: dishes
    })
  }
  catch (error) {
    res.status(501).json({
      message: "Failed to get all orders",
      error: error
    })
  }
}

async function deleteOrder(req, res) {
  try {
    console.log(req.body["_id"]);
    let deletedOrder = await OrdereModel.deleteOne({ "_id": req.body["_id"] })
    console.log(deletedOrder);
    res.status(200).json({
      message: "deleted order successfully !!",
      data: deletedOrder
    })
  }
  catch (error) {
    res.status(501).json({
      message: "Failed to delete order",
      error: error
    })
  }

}

async function addOrder(req, res) {
  try {
    console.log(req.name, req.user, req.body);
    let newOrder = await OrdereModel.create({
      name: req.name,
      amount: req.body.amount,
      address: req.user.orgName,
      dishes: req.body.dishes
    });
    res.clearCookie("cart");
    res.status(201).json({
      message: "Succesfully Added Order !!",
      data: newOrder,
    });
  }
  catch (error) {
    res.status(200).json({
      message: "failed to Create new Order !!",
      error
    })
  }
}
async function addcart(req, res) {
  // res.clearCookie("cart");
  const token = jwt.sign({ id: req.body.uid, cart: req.body.cart }, SECRET_KEY);
  res.cookie("cart", token, { httpOnly: true });
  res.status(201).json({
    message: "Succesfully Added cookie !!"

  });

}
module.exports.addcart = addcart;
module.exports.getAllOrder = getAllOrder;
module.exports.deleteOrder = deleteOrder;
module.exports.addOrder = addOrder;