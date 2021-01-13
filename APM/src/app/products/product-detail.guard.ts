import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let id = +next.url[1].path;//+ converts the string value of the second part of the URL (url[1], which is the parameter) to a numeric value
      if(isNaN(id) || id < 1) {
        alert("Invalid product Id");
        this.router.navigate(['/products']);
        return false;
      }

      return true;
  }

}
