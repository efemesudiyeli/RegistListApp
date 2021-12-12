import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url = "https://reqres.in/api/";
  constructor(public http:HttpClient) { }

  login(veri)
  {
    return this.http.post(this.url + 'login', veri);
  }
  
  signup(veri)  
  {
    return this.http.post(this.url + 'register', veri);
  }

  async setObject(token){
    await Storage.set({
      key: 'user_ionichttpAuth',
      value: JSON.stringify({
        token: token
      })
    });
  }

  async removeItem(item) {
    await Storage.remove({ key: item });
  }

}
