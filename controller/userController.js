const dishesModel = require("../model/dishesModel");
const userModel = require("../model/usersModel");

async function updateProfilePhoto(req, res) {
    try {
        let file = req.file;
        let imagePath = file.destination + "/" + file.filename;
        imagePath = imagePath.substring(6);

        let id = req.id;
        let user = await userModel.findById(id);
        user.pImage = imagePath;
        await user.save({ validateBeforeSave: false });
        res.json({
            message: "Profile Photo updated !!"
        })
    }
    catch (error) {
        res.status(200).json({
            message: "failed to update photo !!",
            error
        })
    }
}

module.exports.updateProfilePhoto = updateProfilePhoto;
