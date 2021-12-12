import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  oncekiSayfa:string
  
  constructor(public activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.oncekiSayfa = this.activatedRoute.snapshot.paramMap.get('degisken')
    console.log('Önceki sayfadan gelen değer: ', this.oncekiSayfa);
  }

}
