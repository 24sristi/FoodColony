const express = require("express");
let dishesRouter = express.Router();
const multer = require("multer");
const { addDish, getAllDishes, deleteDish } = require("../controller/dishController");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/images/dishes")
    },
    filename: function (req, file, cb) {
        cb(null, `dish${Date.now()}.png`);
    }
})

function fileFilter(req, file, cb) {
    if (file.mimetype.includes("image")) {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
}
const uploadDish = multer({storage:storage , fileFilter:fileFilter});

dishesRouter.post("/add",uploadDish.single("Image"),addDish);
dishesRouter.post("/getAllDishes", getAllDishes);
dishesRouter.post("/deleteDish", deleteDish);

module.exports = dishesRouter;
