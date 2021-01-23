import { Injectable } from '@angular/core'
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class ApplicationHttpInterceptor implements HttpInterceptor {

    constructor (private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.authService.isLogged()) {
            const authorizationRequest = req.clone({
                setHeaders: {
                    'Authorization': this.authService.getToken()
                }
            })

            return next.handle(authorizationRequest);
        }

        return next.handle(req);
    }

}