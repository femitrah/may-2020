"use strict";
exports.__esModule = true;
exports.classForUserNameValitaion = exports.classForPasswordValidation = exports.classForEmailValidation = void 0;
var emailValidationRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var classForEmailValidation = /** @class */ (function () {
    function classForEmailValidation() {
    }
    classForEmailValidation.prototype.emailFunction = function (email) {
        console.log(email);
        return emailValidationRegex.test(email);
    };
    return classForEmailValidation;
}());
exports.classForEmailValidation = classForEmailValidation;
var passwordValidatioRegex = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
var classForPasswordValidation = /** @class */ (function () {
    function classForPasswordValidation() {
    }
    classForPasswordValidation.prototype.passwordFunction = function (password) {
        console.log(password);
        return passwordValidatioRegex.test(password);
    };
    return classForPasswordValidation;
}());
exports.classForPasswordValidation = classForPasswordValidation;
var userNameValidationRegex = /^[A-Za-z]*$/;
var classForUserNameValitaion = /** @class */ (function () {
    function classForUserNameValitaion() {
    }
    classForUserNameValitaion.prototype.usernameFunction = function (username) {
        console.log(username);
        return userNameValidationRegex.test(username);
    };
    return classForUserNameValitaion;
}());
exports.classForUserNameValitaion = classForUserNameValitaion;
