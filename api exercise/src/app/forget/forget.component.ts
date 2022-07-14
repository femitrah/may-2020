import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {
  UserName: string = "";
  error: string = "";
  mobileNumber: string = "";
  newUserPassword: string = "";
  positionForObject: any;
  enterYourUsername: boolean = true;
  enterYourMobilenumber: boolean = false;
  enterYourNewPassword: boolean = false;
  checked: boolean = false;
  nagativeNumber:number=-1;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  public userNameChecked() {
    var userNameChecked: any = localStorage.getItem("test") 

    console.log("userNameChecked", userNameChecked);

    var convertuserNameChecked: any = JSON.parse(userNameChecked);

    console.log("convertuserNameChecked", convertuserNameChecked);

    var getUserObjectPosition: any = convertuserNameChecked.findIndex((getdatas: any) => getdatas.userName === this.UserName)
    console.log(getUserObjectPosition)

    if (getUserObjectPosition >= 0) {

      alert("Your Username is correct")

      this.enterYourUsername = false;

      this.enterYourMobilenumber = true;

    } else if (getUserObjectPosition === -1) {

      alert("Wrong userName")
    }
  }
  public getUserName() {

    this.enterYourUsername = false;

    this.enterYourMobilenumber = true;

    var getUserName: string = "showUserName";

    this.phoneNumberChecked(getUserName);
  }
  public phoneNumberChecked(values: any) {

    if (values === "showUserName") {
      this.checked = true;
    } else if (values === "changePassword" && this.checked === true) {
      var phoneNumberChecked: any = localStorage.getItem("test")
      var convertphoneNumberChecked: any = JSON.parse(phoneNumberChecked);
      var ObjectPosition: any = convertphoneNumberChecked.findIndex((getdatas: any) => getdatas.phoneNumber === this.mobileNumber);

      if(ObjectPosition===this.nagativeNumber){
        alert("Mobile Number is not correct")
      } else if(ObjectPosition>=0){
        var getUsernamses: any = convertphoneNumberChecked[ObjectPosition].userName
        alert(getUsernamses);
      }
   

    } else if (values === "changePassword") {
      var phoneNumberChecked: any = localStorage.getItem("test")
      var convertphoneNumberChecked: any = JSON.parse(phoneNumberChecked);
      var ObjectPosition: any = convertphoneNumberChecked.findIndex((getdatas: any) => getdatas.phoneNumber === this.mobileNumber)
      if(ObjectPosition===this.nagativeNumber){
       alert("Mobile Number is not correct")
      } else{
        var values: any = convertphoneNumberChecked[ObjectPosition].phoneNumber === this.mobileNumber
          if (convertphoneNumberChecked[ObjectPosition].phoneNumber === this.mobileNumber) {
          this.positionForObject = ObjectPosition
          alert("Your MobileNumber is correct")
          this.enterYourMobilenumber = false;
          this.enterYourNewPassword = true;
        } 
      } 
    }


  }
  public newPassword() {
    var passwordRegex: any = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/; 

    var checkPassword: boolean = passwordRegex.test(this.newUserPassword);

    console.log("checkPassword", checkPassword)

    if (checkPassword != true) {

      this.error = "Your Password Should be Like Ex:-Mitrah@55"

    } else {

      var newpassword: any = localStorage.getItem("test")

      var convertedPassword: any = JSON.parse(newpassword);

      var newArray: any = convertedPassword.map((changPassword: any, index: number) => {

        if (this.positionForObject === index) {

          changPassword.password = this.newUserPassword;
        }

        return changPassword
      })
      var setValues: any = JSON.stringify(newArray);

      localStorage.setItem("test", setValues);

      alert("Your newpassword is successfully added")

      this.router.navigate(["/login"])
    }

  }


}
