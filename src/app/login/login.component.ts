import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }

  username: string;
  password: string;
  
    ngOnInit() {
    }
  
    login() : void {
      if(this.username == '123' && this.password == '123'){
       this.router.navigate(["users/home"]);
      }else {
        alert("Invalid credentials");
      }
    }
    }


 