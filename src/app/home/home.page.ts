import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  usernameModel: string;
  emailModel: string;
  passwordModel: string;
  address:string = "assets/reqres.json"
  veriler: any;
  oncekiSayfa:string;

  constructor(public Router: Router, public HttpClient: HttpClient, public activatedRoute:ActivatedRoute, public authenticationService:AuthenticationService) {
    
    this.veriAl();
    
  }
  veriAl() {
    
    this.HttpClient.get(this.address).subscribe(veri => { this.veriler = veri; console.log(this.veriler); }, hata => { console.log(hata) });
    
    
  
  } 

  loginpost() {
    console.log("Loginpost çalıştı.", "\n", this.usernameModel, this.emailModel, this.passwordModel)


  }
  registerpost() {
    console.log("Registerpost çalıştı.")
  }

  gitAbout(){
    this.Router.navigate(['/about'])
  }

  detayGit(deger){
    let degerString = JSON.stringify(deger);
    this.Router.navigate(['/detay', {degisken:degerString}])
  }

  exit(){
    this.authenticationService.removeItem('user_ionichttpAuth');
    this.Router.navigateByUrl('/');
  }

  ngOnInit() {
    
  }

}
