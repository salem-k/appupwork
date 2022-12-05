import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public router:Router
  ) {}

  icon1(){
    this.router.navigateByUrl('app1');
  }
  icon2(){
    this.router.navigateByUrl('app2');
  }
  icon3(){
    this.router.navigateByUrl('app3');
  }
}
