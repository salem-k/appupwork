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

      


      if(this.currency1&&this.currency2){

      
      this.http.get("https://api.fastforex.io/convert?from="+this.currency1+"&to="+this.currency2+"&amount=1&api_key=12391f8d37-b95b1d6635-rmmdhg",{'headers':headers}).subscribe((data:any)=>{
        console.log(data);
        this.result = data.result.rate

        loading.dismiss()
      })
      }else{
        loading.dismiss()
      }
    }
  }

  async changeDirection() {
    const headers = { 'apikey': 'ZR5PWI8zKKPJiatKrApNa9SUiBnTqsMA'}
    const loading = await this.loadingCtrl.create({
      message: 'Loading ...',
      duration: 3000,
    });
    let temp=this.currency2
    this.currency2 = this.currency1
    this.currency1 = temp
    
    if(this.currency1&&this.currency2){
    this.http.get("https://api.fastforex.io/convert?from="+this.currency2+"&to="+this.currency1+"&amount=1&api_key=12391f8d37-b95b1d6635-rmmdhg",{'headers':headers}).subscribe((data:any)=>{
      console.log(data);
      this.result = data.result.rate
      loading.dismiss()
    })
    }else{
      loading.dismiss()
    }
  }
}
