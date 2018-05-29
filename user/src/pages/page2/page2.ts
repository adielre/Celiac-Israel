import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FilterPage } from '../filter/filter';

/**
 * Generated class for the Page2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {
  result: Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }
  
  onLoadFilterScreen()
  {
    this.navCtrl.push(FilterPage);
  }
  goToSite(param){
    //console.log(param)
   window.open(param.site_url,'_self'); // self how to open the site 
  }

  popThis() {
    this.navCtrl.pop();
  }


  ionViewDidLoad() {
    
    // let str: string;
     
     console.log('ionViewDidLoad PlacelistPage');
 
     this.result = this.navParams.get('result');
     if( this.result==null){
       alert("STOP")
     }
}
  
  

}
