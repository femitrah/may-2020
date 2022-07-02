import{emailprocess} from "./index"
let emailValidationRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export class classForEmailValidation implements emailprocess{
    emailFunction(email:string){
        console.log(email)
        return emailValidationRegex.test(email);
    }
}
import { passwordProcess } from "./index";
let passwordValidatioRegex=/^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
export class classForPasswordValidation implements passwordProcess{
    passwordFunction(password: string){
         console.log(password)
         return passwordValidatioRegex.test(password);
    }
 }
 import{ userNameProcess }from "./index";
 let userNameValidationRegex=/^[A-Za-z]*$/;
 export class classForUserNameValitaion implements userNameProcess{
    usernameFunction(username: string){
        console.log(username)
        return userNameValidationRegex.test(username);
    }
 }

