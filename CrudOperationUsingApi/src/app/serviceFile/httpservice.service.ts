import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http:HttpClient) { }
public getApiData(){

   return this.http.get('http://192.168.1.159:4000/users')
 
}
public postMethods(postObject:any){
 
  
  console.log("iamgetandpost",postObject)
 return this.http.post('http://192.168.1.159:4000/users',postObject)
}
public updataMethods(editObject:any,id:any){
  var url:any='http://192.168.1.159:4000/users'
console.log('editObject',editObject);
return this.http.put(url+'/'+id+'/',editObject)
}
public delete(id:number){
  console.log("iteamdelet",id);
  return this.http.delete(`http://192.168.1.159:4000/users/${id}`)
  

}

}


