import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detay',
  templateUrl: './detay.page.html',
  styleUrls: ['./detay.page.scss'],
})
export class DetayPage implements OnInit {
  user:string;

  constructor(public activatedRoute:ActivatedRoute) {}

  ngOnInit() {
    
    this.user = JSON.parse(this.activatedRoute.snapshot.paramMap.get('degisken'));
    
  }

}
