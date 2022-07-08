import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
// import { FormBuilder,FormGroup,Validator } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  setMobileNumber:string="";
  setConfirmPassword:string="";
  setPassword: string = "";
  setEmail: string = "";
  setUserName: string = "";
  error: string = "";
  checkedPassword: any;
  value: string = "";
  userInformationArray: any = [];
  convertedJson: any
  negativOne: number = -1

  constructor() {

  }
  ngOnInit(): void {
  }
 


  public register() {
     var emailRegex:any=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     var passwordRegex:any=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/ ; 
     var numperRegex:any=new RegExp("^[0-9]+$");

     var numberValidation:any=numperRegex.test(this.setMobileNumber)
    
     
     var passwordValidation:any=passwordRegex.test(this.setPassword);

     console.log("pass",passwordValidation)

    var emailValidation:any=emailRegex.test(this.setEmail);

   

    var pass:any=this.setPassword.split('');

    var passtwo:any=this.setConfirmPassword.split('');

    var emailLength:any=this.setMobileNumber.split('');

    var compare:any=this.setPassword.localeCompare(this.setConfirmPassword);
    var check = localStorage.getItem("test");

    if (this.setUserName === "" || this.setEmail === "" || this.setPassword === "" || this.setConfirmPassword === "" || this.setMobileNumber === "") {
      this.error = "Input Filed Should Not Be Empty"
    } else if(emailValidation!== true){
        this.error="Please Enter The Correct Emailid"
    } else if(pass.length!=passtwo.length){
      this.error="Your Password And ConfirmPassword is doesn't match"
    } else if(compare=== -1){
       this.error="Your Password And ConfirmPassword is doesn't match"
    } else if(pass.length < 8){
      this.error="Your Password Should Be 8 characters"
    } else if(passwordValidation!=true){
      this.error="Your Password Should Be EX:-Mitrha@00*"
    } else if(numberValidation!=true) {
      this.error="Your Mobile Number Should Be Number "
    } else if(emailLength.length<10){
      this.error="Your Mobile Number Should Be 10 Numbers"
    } else if (check == null) {
        var model: any = {}
        model.userName = this.setEmail;

        model.password = this.setPassword;

        this.userInformationArray.push(model)

        var convertedJson = JSON.stringify(this.userInformationArray)

        localStorage.setItem("test", convertedJson)
        
        this.error=""
        alert("Your datas successfully added")  
        this.setEmail = ""
        this.setUserName = ""
        this.setMobileNumber = ""
        this.setPassword = ""
        this.setConfirmPassword = ""

       } else {
        console.log("isuesblock")
        var store: any = localStorage.getItem("test")
        var model: any = {}
        var intedervalues = JSON.parse(store);

        var checkedExsitingUser = intedervalues.findIndex((value: any) => value.userName === this.setEmail)
        
        console.log("checkedExsitingUser", checkedExsitingUser)

        if (checkedExsitingUser === this.negativOne) {

          model.userName = this.setEmail;

          model.password = this.setPassword;

          intedervalues.push(model);

          var integerData = JSON.stringify(intedervalues);

          localStorage.setItem("test", integerData)
          this.error = ""
          alert("Your datas successfully added") 
          this.setEmail = ""
          this.setUserName = ""
          this.setMobileNumber = ""
          this.setPassword = ""
          this.setConfirmPassword = ""

        } else {
          this.error = "UserName Was Already Exist"
        }
      }

    }


  }

  


