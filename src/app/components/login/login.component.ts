import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm!: NgForm
  username: string = ''

  // ngAfterViewInit():void {
  //   console.log(this.loginForm)
  // }

  isUserLoggedIn: boolean = false

  handleLogin() {
    console.log(this.loginForm.value)
    this.isUserLoggedIn =  true
    this.onFormClear()
  }

  handleLogout() {
    this.isUserLoggedIn = false
  }

  onFormClear() {
    this.loginForm.reset()    
  }
}
