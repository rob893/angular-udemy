import { Subject } from 'rxjs';
import { User } from './user.model';
import { AuthData } from './auth-data.model';

export class AuthService {
    
    public authChange = new Subject<boolean>();

    private user: User;


    public registerUser(authData: AuthData): void {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        };

        this.authChange.next(true);
    }

    public login(authData: AuthData): void {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        };

        this.authChange.next(true);
    }

    public logout(): void {
        this.user = null;
        this.authChange.next(false);
    }

    public getUser(): User {
        return { ...this.user };
    }

    public isAuth(): boolean {
        return this.user != null;
    }
}