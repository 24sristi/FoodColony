const dishesModel = require("../model/dishesModel");

async function getAllDishes(req, res) {
  try {
    let dishes = await dishesModel.find({});
    res.status(200).json({
      message: "Got all dishes successfully !!",
      data: dishes
    })
  }
  catch (error) {
    res.status(501).json({
      message: "Failed to get all dishes",
      error: error
    })
  }
}

async function deleteDish(req, res) {
  try {
    console.log(req.body["_id"]);
    let deletedDish = await dishesModel.deleteOne({ "_id": req.body["_id"] })
    res.status(200).json({
      message: "deleted dish successfully !!",
      data: deletedDish
    })
  }
  catch (error) {
    res.status(501).json({
      message: "Failed to delete dish",
      error: error
    })
  }

}

async function addDish(req, res) {
  try {
    let file = req.file;
    let imagePath = file.destination + "/" + file.filename;
    imagePath = imagePath.substring(6);
    let newDish = await dishesModel.create({
      name: req.body.name,
      Amount: req.body.Amount,
      Image: imagePath,
      Details: req.body.Details,
      category:req.body.category
    });
    console.log(newDish);
    res.status(201).json({
      message: "Succesfully Added dish !!",
      data: newDish,
    });
  }
  catch (error) {
    res.status(200).json({
      message: "failed to Create dish !!",
      error
    })
  }
}



module.exports.addDish = addDish;
module.exports.getAllDishes = getAllDishes;
module.exports.deleteDish = deleteDish;