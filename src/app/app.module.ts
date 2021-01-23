import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './login/auth/auth.component';
import { RegisterComponent } from './login/register/register.component';
import { BarComponent } from './components/bar/bar.component';
import { InputComponent } from './components/input/input.component';
import { ProductComponent } from './product/product.component';
import { AuthBtnComponent } from './components/auth-btn/auth-btn.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';

import { AuthService } from './shared/services/auth.service';
import { NotificationService } from './shared/services/notification.service';
import { AuthGuard } from './shared/utils/auth.guard';
import { ApplicationErrorHandler } from './shared/utils/application.error.handler';
import { ApplicationHttpInterceptor } from './shared/utils/application.http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AuthComponent,
    RegisterComponent,
    BarComponent,
    InputComponent,
    ProductComponent,
    AuthBtnComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [
    AuthService,
    NotificationService,
    AuthGuard,
    { provide: ErrorHandler, useClass: ApplicationErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: ApplicationHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
