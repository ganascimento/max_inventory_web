import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mi-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['../login.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router) { }

  goToRegister() {
    this.router.navigateByUrl('/login/register');
  }

  ngOnInit(): void {

  }

}
