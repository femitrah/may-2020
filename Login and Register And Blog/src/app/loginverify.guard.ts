import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginverifyGuard implements CanActivate {
constructor (private router:Router){

}  
  [x: string]: any;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        var localDatas:any=localStorage.getItem("test")
        console.log("hai",localDatas)

        console.log("khvkcdkhvhcchvbhkbjkchvj")

        var covertedIntegetDatas:any=JSON.parse(localDatas)

        for(var i=0;i<covertedIntegetDatas.length;i++){
         
         if(covertedIntegetDatas[i].activeUser===true){
             return true;
         } else{
          
         }
         break
        }
        this.router.navigate(['login']);
        return false;
      
  }
  
}
