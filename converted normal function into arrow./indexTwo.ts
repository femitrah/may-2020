// -----------------------------------------emailValidation
import{classForEmailValidation}from"./indexone"
let objectOne = new classForEmailValidation()
let userEmail="palaniselvamsm@gmail.com"
let emailOutput= objectOne.emailFunction(userEmail);
console.log("EmailValidation",emailOutput); 

// -----------------------------------------passwordValidation

import { classForPasswordValidation } from "./indexone"
let objectTwo=new classForPasswordValidation();
let passwordInput="Selvam@5500*";
let passwordOutPut=objectTwo.passwordFunction(passwordInput);
console.log("PasswordValidion is",passwordOutPut);

//-------------------------------------------userNameValidation

import {classForUserNameValitaion} from "./indexone"
let objectThree = new classForUserNameValitaion();
let userNameInput="Palaniselvam";
let userNameOutput=objectThree.usernameFunction(userNameInput);
console.log("UserNameValidation",userNameOutput);

