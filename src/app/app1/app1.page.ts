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
  constructor(
    private http: HttpClient,
    private loadingCtrl: LoadingController,
    private forObjectPipe: ForObjectPipe
  ) { }

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading ...',
      duration: 3000,
    });

    loading.present();

    

    const headers = { 'apikey': 'ZR5PWI8zKKPJiatKrApNa9SUiBnTqsMA'}  
    console.log(headers)
    this.http.get("https://api.apilayer.com/currency_data/list",{'headers':headers}).subscribe((data:any)=>{
      console.log(data);
      
      
      

      this.list_currency=this.forObjectPipe.transform(data.currencies)
      this.loaded = true
      loading.dismiss()

      
      
    })

  }
}
