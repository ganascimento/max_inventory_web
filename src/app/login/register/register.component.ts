import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RegisterModel } from 'src/app/shared/models/login.model';
import { RequestStatus } from 'src/app/constants/request.status.constant';

@Component({
  selector: 'mi-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login.component.css']
})
export class RegisterComponent implements OnInit {
  public requestStatus: number = RequestStatus.none;
  public registerForm: FormGroup;  
  private emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService) { }

  registerUser(user: RegisterModel) {
    this.authService.createUser(user)
      .subscribe(user => {
        
      });
  }

  goToAuth() {
    this.router.navigateByUrl('/login/auth');
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname: this.formBuilder.control('', [Validators.required, Validators.minLength(2)]),
      lastname: this.formBuilder.control('', [Validators.required, Validators.minLength(4)]),
      email: this.formBuilder.control('', [Validators.required, Validators.minLength(8), Validators.pattern(this.emailPattern)]),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(8), Validators.maxLength(32)])
    });
  }

}
