"use strict";
exports.__esModule = true;
// -----------------------------------------emailValidation
var indexone_1 = require("./indexone");
var objectOne = new indexone_1.classForEmailValidation();
var userEmail = "palaniselvamsm@gmail.com";
var emailOutput = objectOne.emailFunction(userEmail);
console.log("EmailValidation", emailOutput);
// -----------------------------------------passwordValidation
var indexone_2 = require("./indexone");
var objectTwo = new indexone_2.classForPasswordValidation();
var passwordInput = "Selvam@5500*!";
var passwordOutPut = objectTwo.passwordFunction(passwordInput);
console.log("PasswordValidion is", passwordOutPut);
//-------------------------------------------userNameValidation
var indexone_3 = require("./indexone");
var objectThree = new indexone_3.classForUserNameValitaion();
var userNameInput = "Palaniselvam";
var userNameOutput = objectThree.usernameFunction(userNameInput);
console.log("UserNameValidation", userNameOutput);
