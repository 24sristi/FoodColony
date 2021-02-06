const SECRET_KEY = process.env.SECRET_KEY;
const jwt = require("jsonwebtoken");
const dishesModel = require("../model/dishesModel");
const OrdereModel = require("../model/pendingOrderModel");
function getLoginPage(req, res) {
    if (req.user) {
        res.redirect('/');
    } else {
        res.render("login.ejs", { name: req.name });
    }
}

function getSignUpPage(req, res) {
    if (req.user) {
        res.redirect('/');
    } else {
        res.render("signup.ejs", { name: req.name });
    }
}

async function getmenu(req, res) {
    let dishes = await dishesModel.find({});
    if (req.user) {
        res.render("menu.ejs", { user: req.user, dishes: dishes });
    } else {
        res.redirect('/');
    }
}

function getprofile(req, res) {
    if (req.user) {
        res.render("profile.ejs", { user: req.user });
    } else {
        res.redirect('/');
    }
}

async function getorderHistory(req, res) {
    try {
        if (req.role=="admin") {
            let orders = await OrdereModel.find({});
            res.render("orderHistory.ejs", { user: req.user, orders: orders });
        } else {
            res.redirect('/');
        }
    }
    catch (err) {
        res.redirect('/');
    }
}

function getHomePage(req, res) {
    if (req.user) {
        res.redirect('/menu');
    } else {
        res.render("homepage.ejs");
    }
}

function faq(req, res) {
    res.render("faq.ejs");
}

function contact(req, res) {
    res.render("contact.ejs");
}

async function getChangeMenu(req, res) {
    if (req.role=="admin") {
        let dishes = await dishesModel.find({});
        res.render("changeMenu.ejs", { user: req.user, dishes: dishes });
    } else {
        res.redirect('/');
    }
}

function getcart(req, res) {
    if (req.user) {
        let token = req.cookies.cart;
        const payload = jwt.verify(token, SECRET_KEY);
        console.log(payload.cart);
        let amt = 0;
        for(let i=0;i<payload.cart.length;i++){
            amt += parseInt(payload.cart[i].amt);
        }

        res.render("cart.ejs", { name: payload.cart, amt: amt });
    } else {
        res.redirect('/');
    }
}
module.exports.getLoginPage = getLoginPage;
module.exports.getSignUpPage = getSignUpPage;
module.exports.getmenu = getmenu;
module.exports.getprofile = getprofile;
module.exports.getorderHistory = getorderHistory;
module.exports.getHomePage = getHomePage;
module.exports.faq = faq;
module.exports.contact = contact;
module.exports.getChangeMenu = getChangeMenu;
module.exports.getcart = getcart;
