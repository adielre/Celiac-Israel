import { Component, Input,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page2Page } from '../page2/page2';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  @ViewChild('searchBox') searchString
  @Input() location: string//delete?
  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }
  openPlaceList(){

  }

  /*onLoadPlaces() {
    if (this.location == undefined) {
      this.presentAlert();
      //console.log("hello");
    }
    else {

      this.location = undefined;
      this.navCtrl.push(Page2Page);
      //console.log("world");
    }
  }*/

  tryMe() {
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
  }

  getRes(location: string) {

  }

  presentAlert() {
    let alert = this.alertCtrl.create({

      title: 'שגיאה',
      subTitle: 'אתה חייב להכניס מיקום',
      cssClass: 'rtlAlert',
      buttons: ['אשר']
    });
    alert.present();
  }

}
