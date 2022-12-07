import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  apps:any = [
    {
      name:"Currency Rates",
      img:"/assets/icon1.png"
    },
    {
      name:"Calculator",
      img:"/assets/icon2.png"
    },
    {
      name:"Add Mini Program",
      img:"/assets/icon3.png"
    }
  ]
  results:any=[]
  constructor(
    public router:Router
  ) {
    this.results=this.apps
  }

  icon(index:any) {
    this.router.navigateByUrl("app"+(index+1));
  }

  handleChange(event:any) {
    const query = event.target.value.toLowerCase();
    this.results = this.apps.filter((d:any) => d.name.toLowerCase().indexOf(query) > -1);
  }

}
