import { Injectable } from "@angular/core";
import {
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanActivate,
} from "@angular/router";
import { Observable } from "rxjs";
import { CurrentUserService } from "src/app/service/current-user/current-user.service";

@Injectable({
  providedIn: "root",
})
export class DashboardGuard implements CanLoad, CanActivate {
  constructor(
    private currentUserService: CurrentUserService,
    private router: Router
  ) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log("here >>>>>>>>>>>>.");
    console.log(this.currentUserService.isLoggedIn());
    if (this.currentUserService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return true;
    }
  }
  canActivate() {
    if (this.currentUserService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return true;
    }
  }
}
