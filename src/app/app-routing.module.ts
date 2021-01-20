import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './login/auth/auth.component';
import { RegisterComponent } from './login/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { 
    path: 'login', 
    component: LoginComponent,
    children: [
      { path: '', redirectTo: 'auth', pathMatch: 'full'  },
      { path: 'auth', component: AuthComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
