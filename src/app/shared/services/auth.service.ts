import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { URL_API } from '../../constants/api.constant';
import { TokenModel } from '../models/token.model';
import { LoginModel, RegisterModel } from '../models/login.model';
import { ResponseModel } from '../models/response.model';

@Injectable()
export class AuthService {
    private token: TokenModel | null = null;

    constructor(private http: HttpClient) {}

    public isLogged(): boolean {
        return this.token != null;
    }

    public getToken(): string {
        if (this.token)
            return `Bearer ${this.token.token}`;
        
        return '';
    }

    public logout(): void {
        this.token = null;
    }

    public login(user: LoginModel): Observable<ResponseModel<TokenModel>> {
        return this.http.post<ResponseModel<TokenModel>>(`${URL_API}/user/auth`, user)
            .pipe(
                tap(resp => {
                    if (resp.success)
                        this.token = resp.data;
                })
            );
    }

    public createUser(user: RegisterModel): Observable<ResponseModel<TokenModel>> {
        return this.http.post<ResponseModel<TokenModel>>(`${URL_API}/user`, user)
            .pipe(
                tap(resp => {
                    if (resp.success)
                        this.token = resp.data;
                })
            );
    }
}