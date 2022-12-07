import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ForObjectPipe } from '../pipe.service';

@Component({
  selector: 'app-app1',
  templateUrl: './app1.page.html',
  styleUrls: ['./app1.page.scss'],
})
export class App1Page implements OnInit {
  list_currency:any
  loaded=false
  currency1:any
  currency2:any
  result:any
  constructor(
    private http: HttpClient,
    private loadingCtrl: LoadingController,
    private forObjectPipe: ForObjectPipe
  ) { }

  async ngOnInit() {
  }
  async loadCurrency(currency:any) {
    this.currency1 = currency
    this.getCurrency()
  }
  loadCurrency2(currency:any) {
    this.currency2 = currency
    this.getCurrency()
    
  }
  async getCurrency(){
    if(this.currency1 != "" && this.currency2 != "" ) {
      const loading = await this.loadingCtrl.create({
        message: 'Loading ...',
        duration: 3000,
      });
  
      loading.present();
      const headers = { 'apikey': 'ZR5PWI8zKKPJiatKrApNa9SUiBnTqsMA'}  
      this.http.get("https://api.apilayer.com/fixer/convert?to="+this.currency2+"&from="+this.currency1+"&amount=1",{'headers':headers}).subscribe((data:any)=>{
        console.log(data);
        this.result = data.result
        loading.dismiss()
      })
    }
  }
}
