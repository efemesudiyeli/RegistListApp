import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public Router:Router, public HttpClient:HttpClient, private fb:FormBuilder, public authenticationservice:AuthenticationService) { }

  uyelikBilgisi: FormGroup;
  userValues:any;

  ngOnInit() {
    this.uyelikBilgisi = this.fb.group({
      ad:['Eve Holt', [Validators.required, Validators.minLength(3)]],
      email:['eve.holt@reqres.in', [Validators.required, Validators.email]],
      password:['pistol', [Validators.required, Validators.minLength(6)]]
    });
  }

  git(deger){
    this.Router.navigate(['/about', {degisken:deger}])
  }
  
  gitHome(){
    this.Router.navigate(["/home"]);
  }

  gitRegister(){
    this.Router.navigate(["/register"])
  }
  get ad(){
    return this.uyelikBilgisi.get('ad');
  }
  get email(){
    return this.uyelikBilgisi.get('email');
  }
  get password(){
    return this.uyelikBilgisi.get('password');
  }

  signup()
  {
    this.authenticationservice.signup(this.uyelikBilgisi.value).subscribe(sonuc => {
      this.userValues = sonuc;
      console.log(this.userValues);
      this.authenticationservice.setObject(this.userValues.token);
      this.Router.navigateByUrl('/home');
    },
    hata=>{
      console.log(hata.error.error)
    });
  }

}
