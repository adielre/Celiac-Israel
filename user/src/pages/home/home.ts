import { Component, Input,ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Page2Page } from '../page2/page2';
import { FirebaseService } from '../../app/firebase-service/firebase.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  @ViewChild('searchBox') searchString
  @Input() myLocation: string

    locationForm: FormGroup;
    loadPage2: any =0;

    constructor(public navCtrl: NavController, private alertCtrl: AlertController,private firebase: FirebaseService, public formBuilder: FormBuilder) {
      this.locationForm = formBuilder.group({
         myLocation: ['', Validators.compose([Validators.pattern('[א-ת ]*'), Validators.required])],
      });
  }

  openPlaceList() {

    if(!this.locationForm.valid)//incorect valid
    {
      this.presentAlert();
      return;
    }
      

      /*alert("a");
      if (this.searchString.value == undefined) {
        alert("b");
        this.presentAlert();
      }  
      alert("c");*/
   
    this.loadPage2=1;

    this.firebase.queryFirestore().fromCollection('resturant').field('city').equals(this.searchString.value).runQuery()
      .then(function (res) {
         if (res.length === 0) {
          this.presentAlert2();
          this.loadPage2=0;
        } else {
          //alert(this.result)
          this.navCtrl.push(Page2Page, { result: res });
          this.loadPage2=0;
        }
      }.bind(this))
     
  }


  onLoadPlaces() {
    if (this.myLocation == undefined) {
      this.presentAlert();
      
    }
    else {

      this.myLocation = undefined;
      this.navCtrl.push(Page2Page);
     
    }
  }



  getRes(myLocation: string) {

  }

  presentAlert() 
  { 
    let alert = this.alertCtrl.create({
      title: 'שגיאה',
      subTitle: 'אתה חייב להכניס מיקום',
      cssClass: 'rtlAlert',
      buttons: ['אשר']
    });
    alert.present();
  }

  presentAlert2() 
  { 
    let alert = this.alertCtrl.create({
      title: 'שגיאה',
      subTitle: 'לא קיימות מסעדות במאגר, נסה מיקום אחר',
      cssClass: 'rtlAlert',
      buttons: ['אשר']
    });
    alert.present();
  }





}
