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
      return;
   
      this.loadPage2=1;

    this.firebase.queryFirestore().fromCollection('resturant').field('Address').equals(this.searchString.value).runQuery()
      .then(function (res) {
         if (res.length === 0) {
          alert('אין מסעדות במיקום זה');
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
      //console.log("hello");
    }
    else {

      this.myLocation = undefined;
      this.navCtrl.push(Page2Page);
      //console.log("world");
    }
  }

 /* tryMe() {
    console.log('Clicked')
    window['firebase'].firestore().collection("resturant").add(
      {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      }
    )
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }

  createNewUser(email: string, password: string) {
    window['firebase'].auth().createUserWithEmailAndPassword(email, password)
  }*/

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





}
