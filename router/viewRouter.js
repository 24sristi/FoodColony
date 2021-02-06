const express = require("express");
const { isLoggedIn, logout } = require("../controller/authController");
const { getLoginPage, getSignUpPage, getmenu, getprofile, getorderHistory, getHomePage, faq, contact, getChangeMenu, getcart } = require("../controller/viewController");


const viewRouter = express.Router();
viewRouter.use(isLoggedIn);

viewRouter.route("/login").get(getLoginPage);
viewRouter.route("/signup").get(getSignUpPage);
viewRouter.route("/menu").get(getmenu);
viewRouter.route("/profile").get(getprofile);
viewRouter.route("/orderHistory").get(getorderHistory);
viewRouter.route("/").get(getHomePage);
viewRouter.route("/faq").get(faq);
viewRouter.route("/contact").get(contact);
viewRouter.route("/changeMenu").get(getChangeMenu);
viewRouter.route("/cart").get(getcart);
viewRouter.route("/logout").get(logout);


module.exports = viewRouter;