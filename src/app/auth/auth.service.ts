import { Subject } from 'rxjs';
import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    
    public authChange = new Subject<boolean>();

    private user: User;


    public constructor(private router: Router) {}

    public registerUser(authData: AuthData): void {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        };

        this.authSuccessfully();
    }

    public login(authData: AuthData): void {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        };

        this.authSuccessfully();
    }

    public logout(): void {
        this.user = null;
        this.authChange.next(false);

        this.router.navigate(['/login']);
    }

    public getUser(): User {
        return { ...this.user };
    }

    public isAuth(): boolean {
        return this.user != null;
    }

    private authSuccessfully(): void {
        this.authChange.next(true);

        this.router.navigate(['/training']);
    }
}