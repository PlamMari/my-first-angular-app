import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
providedIn: 'root'
})
export class AboutClassGuard implements CanActivate {

constructor(private userService: UserService, private router: Router) { }

canActivate(): boolean {
    if (this.userService.isUserAuthenticated()) {
        return true;
    }
    this.router.navigate(['login'])
    return false;
}
}