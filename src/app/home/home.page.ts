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

  goToApp1() {
    this.router.navigateByUrl('app1');
  }
  goToApp2() {
    this.router.navigateByUrl('app2');
  }
  
}
