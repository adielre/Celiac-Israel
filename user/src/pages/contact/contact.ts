import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import {EmailComposer} from '@ionic-native/email-composer';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  subject='';
  body='';

  constructor(public navCtrl: NavController, public emailComposer: EmailComposer, private alertCtrl: AlertController) {

  }
  send()
  {
   /* if(this.subject == undefined || this.body == undefined)
    {
      this.presentAlert();
      return;

    }*/
    let email={
    to:"office@celiac.org.il",
    cc:[],
    bcc:[],
    attacment :[],
    subject: this.subject,
    body: this.body,
    isHtml:true,
    app:"gmail"
    }
    this.emailComposer.open(email);
  }

  presentAlert() 
  { 
    let alert = this.alertCtrl.create({
      title: 'שגיאה',
      subTitle: 'נא מלא את השדות החסרים',
      cssClass: 'rtlAlert',
      buttons: ['אשר']
    });
    alert.present();
  }


}
