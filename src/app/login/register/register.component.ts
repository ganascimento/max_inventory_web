import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mi-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  goToAuth() {
    this.router.navigateByUrl('/login/auth');
  }

  ngOnInit(): void {
  }

}
