import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    
    public constructor(private authService: AuthService, private router: Router) {}
    
    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.authService.isAuth()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}