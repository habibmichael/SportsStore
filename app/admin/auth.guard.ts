/**
 * Created by mh122354 on 5/4/2017.
 */
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot,
        Router} from "@angular/router";
import { AuthService } from "../model/auth.service";

@Injectable()
export class AuthGuard{

    constructor(private router: Router,
                private auth: AuthService){}

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot) : boolean {

        if(!this.auth.authenticated){
            this.router.navigateByUrl("/admin/auth");
            return false;
        }
        return true;
    }
}