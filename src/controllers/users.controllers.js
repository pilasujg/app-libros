const usersCtrl = {};
//import User from "../models/user.js";

usersCtrl.renderSignUpForm = (req, res) => {
    res.render("users/signup")
};

usersCtrl.signup = (req, res) => {
    res.render("signup");

};

usersCtrl.renderSigninForm = (req, res) => {
    res.render("users/signin");

};

usersCtrl.signin = (req, res) => {
    res.render("signin");
};

usersCtrl.logout = (req, res) => {
    res.render("logout")
};


module.exports = usersCtrl