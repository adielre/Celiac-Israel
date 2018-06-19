import { Component, ViewChild } from '@angular/core';
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
  filteringBy = undefined

  @ViewChild('businessFilter') businessFilter
  @ViewChild('restaurantFilter') restaurantFilter

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
      for (let i = 0; i < this.result.length; i++) {
        this.result[i].showOnScreen = true
      }
      this.fillFilterArrays()
    }
    this.restaurantFilter.setValue(this.toShowAll)
    this.businessFilter.setValue(this.toShowAll)
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
      let businessType = this.result[i].TypeOfBusiness.trim()
      let restaurantType = this.result[i].restauranttype.trim()
      if (businessType != null && businessType.trim().length > 0 && this.toInclude(this.result, businessType.trim())) {
        this.businessTypes.push({ name: businessType, value: businessType })
      }
      if (restaurantType != null && restaurantType.trim().length > 0 && this.toInclude(this.result, restaurantType.trim())) {
        this.restaurantTypes.push({ name: restaurantType, value: restaurantType })
      }
    }
  }

  //this function is called once the user has selected a location filter
  setRestaurantTypes(value) {
    // console.log(this.restaurantFilter.selectOptions)
    // console.log(this.restaurantFilter.value)
    if(this.filteringBy === 'business') return
    this.filteringBy = 'restaurant'
    this.businessFilter.value = this.toShowAll
    let selected = value.trim()
    for (let i = 0; i < this.result.length; i++) {
      this.result[i].showOnScreen = true
      if (selected == this.toShowAll) continue// continue  for the next iter
      if (this.result[i].restauranttype.trim() != selected.trim()) {
        this.result[i].showOnScreen = false
      }
    }
    this.filteringBy = undefined
  }

  //this function is called once the user has selected a type of business filter
  setBusinessTypes(value) {
    if(this.filteringBy === 'restaurant') return
    this.filteringBy = 'business'
    this.restaurantFilter.value = this.toShowAll
    let selected = value.trim()
    for (let i = 0; i < this.result.length; i++) {
      this.result[i].showOnScreen = true
      if (selected == this.toShowAll) continue// continue  for the next iter
      if (this.result[i].TypeOfBusiness.trim() != selected.trim()) {
        this.result[i].showOnScreen = false
      }
    }
    this.filteringBy = undefined
  }

  // this function return true if the 2nd argument is in the array
  toInclude(array: Array<{ name: string, value: string }>, toFind: string): boolean {
    for (let i = 0; i < array.length; i++) {
      if (array[i].name === toFind || array[i].value === toFind) return false
    }
    return true
  }



}
