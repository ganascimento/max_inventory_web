import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginModel } from 'src/app/shared/models/login.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RequestStatus } from 'src/app/constants/request.status.constant';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'mi-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['../login.component.css']
})
export class AuthComponent implements OnInit {
  public requestStatus: number = RequestStatus.none;
  public authForm: FormGroup;
  private emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService, private notificationService: NotificationService) { }

  login(user: LoginModel) {
    this.requestStatus = RequestStatus.isLoading;

    setTimeout(() => {
      this.authService.login(user)
        .subscribe((resp: any) => {
          if (resp.success)
            this.router.navigateByUrl('/home');            
        }, () => {
          this.requestStatus = RequestStatus.error;
          this.notificationService.notify('Login ou senha incorretos');
        });
      
    }, 500);
  }

  goToRegister() {
    this.router.navigateByUrl('/login/register');
  }

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.minLength(8), Validators.pattern(this.emailPattern)]),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(8), Validators.maxLength(32)])
    });
  }

}
