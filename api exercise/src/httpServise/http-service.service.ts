import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  [x: string]: any;
  
 
  constructor(private http:HttpClient) {
  
   }
  public getData(){
    let headers = new HttpHeaders()
    headers=headers.set('api-key','6d77d726b980143eff391187ac316c51');
    console.log("headers",headers)
    return this.http.get('https://api.scripture.api.bible/v1/bibles', { headers: headers })
    .toPromise()
    .then();
  }
  
   }  
   


