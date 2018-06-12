import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FilterPage } from '../filter/filter';
import { DetailsPage } from '../details/details';
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
  restaurantTypes = []
  businessTypes = []
  toShowAll = 'הצג הכל'

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  onLoadFilterScreen() {
    this.navCtrl.push(FilterPage);
  }
  goToSite(param) {
    //console.log(param)
    window.open(param.links.website, '_self'); // self how to open the site 
  }

  popThis() {
    this.navCtrl.pop();
  }


  ionViewDidLoad() {

    console.log('ionViewDidLoad PlacelistPage');

    this.result = this.navParams.get('result');
    if (this.result == null) {
      alert("STOP")
    } else {
      this.fillFilterArrays()
    }
  }

  /**
   * this fun move to DetailsPage 
   * @param res the resturant that the user click on it
   */
  move(res) {
    console.log(res.namePlace);
    this.navCtrl.push(DetailsPage, { result: res });
  }

  fillFilterArrays() {
    this.restaurantTypes.push({ name: this.toShowAll, value: this.toShowAll })
    this.businessTypes.push({ name: this.toShowAll, value: this.toShowAll })
    for (let i = 0; i < this.result.length; i++) {
      let businessType = this.result[i].TypeOfBusiness
      let restaurantType = this.result[i].restaurantType
      if (businessType != null && businessType.trim().length > 0 && this.toInclude(this.result, businessType.trim())) {
        this.businessTypes.push({ name: businessType, value: businessType })
      }
      if (restaurantType != null && restaurantType.trim().length > 0 && this.toInclude(this.result, restaurantType.trim())) {
        this.restaurantTypes.push({ name: restaurantType, value: restaurantType })
      }
    }
  }

  // this function return true if the 2nd argument is in the array
  toInclude(array: Array<{ name: string, value: string }>, toFind: string): boolean {
    for (let i = 0; i < array.length; i++) {
      if (array[i].name === toFind || array[i].value === toFind) return false
    }
    return true
  }



}
