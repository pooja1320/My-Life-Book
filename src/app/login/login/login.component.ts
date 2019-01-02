import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  loginModel= {
    'name': '',
    'password': ''
  };
  getErrorMessage() {
    return '';
  }
 onSignIn(){
  console.log(this.loginModel.name);
  console.log(this.loginModel.password);
}


}
