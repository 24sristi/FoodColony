const express = require("express");
const userRouter = express.Router();
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function(req , file , cb){
    cb(null , "public/images/eid")
  } ,
  filename : function(req , file , cb){
    cb(null , `user${Date.now()}.jpg`);
  } 
})
const storageProfile = multer.diskStorage({
  destination: function(req , file , cb){
    cb(null , "public/images/users")
  } ,
  filename : function(req , file , cb){
    cb(null , `user${Date.now()}.jpg`);
  } 
})

function fileFilter(req , file , cb){
  if(file.mimetype.includes("image")){
    cb(null , true);
  }
  else{
    cb(null , false);
  }
}

const upload = multer({storage:storage , fileFilter:fileFilter});
const uploadProfile =  multer({storage:storageProfile , fileFilter:fileFilter});
const { signup, login, protectRoute, logout} = require("../controller/authController");

const {
//   getAllUsers,
//   createUser,
//   getUserById,
//   updateUserById,
//   deleteUserById,
  updateProfilePhoto
} = require("../controller/userController");

userRouter.post("/signup" ,upload.single("eidpic"), signup );
userRouter.post("/login" , login);
userRouter.post("/logout",logout)

userRouter.use(protectRoute);
userRouter.patch("/updateprofilephoto" , uploadProfile.single("user") , updateProfilePhoto);
// userRouter.route("").get(getUserById).patch(updateUserById).delete(deleteUserById);


module.exports = userRouter;
