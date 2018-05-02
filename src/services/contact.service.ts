import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ContactService {
private API_ENDPOINT = 'http://localhost:3000/ContactForm'; //replace with your API ENDPOINT
constructor(private _http: Http) {}

saveContact(contact: any) {
  return this._http.post(this.API_ENDPOINT, contact)
    .map(res => res.json());
}

getContact(){
  return this._http.get(this.API_ENDPOINT)
  .map(res => res.json());
}

getContactById(id : number){
return this._http.get(`${this.API_ENDPOINT}/${id}`)
.map(res => res.json());
}
}