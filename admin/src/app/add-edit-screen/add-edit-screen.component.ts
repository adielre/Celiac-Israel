import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../servises/auth.service';

@Component({
  selector: 'app-add-edit-screen',
  templateUrl: './add-edit-screen.component.html',
  styleUrls: ['./add-edit-screen.component.css']
})
export class AddEditScreenComponent implements OnInit {
  title = 'app';
  isLoading = false;
  public resColl
  constructor(public authService: AuthService,private afs: AngularFirestore, private router: Router){
     
  } 

  $key: string;
  namePlace: string;
  Address: string;
  phone: string='';
  lastmodi: string='';
  email: string='';
  restauranttype: string='';
  Description: string='';
  opening: string='';
 
  /*opening: {openHour: number, openMin: number, closeHour: number, closeMin: number}={
    openHour: 0, openMin: 0, closeHour: 0, closeMin: 0
  }*/
  sensitivePreferences: {gfMenu: boolean,sensitivity?: string,preferences?: string, accessibility: boolean, kosher: boolean}={
    gfMenu: false/*Gluten free menu*/,sensitivity: "",preferences: "", accessibility: false, kosher: false
  }
  linksUrl:{ website?: string, logo?: string ,facebook?:  string;}={
    website: "", logo:"",   facebook:  ""
  }
 /* location_in_map:{x:number, y: number}={
    x:0, y:0
  }*/
  
  priceRange:  string='';
  
  city: string ;
  facilities:  string='';
  moreInfo:  string='';
  TypeOfBusiness :  string='';
  
 
public save(){
    let obj = {
      namePlace: this.namePlace.trim(),
      Address:this.Address.trim(),
      city: this.city.trim(),
      phone: this.phone.trim(),
      lastmodi:this.lastmodi.trim(),
      email: this.email.trim(),
      opening: this.opening.trim(),
      Description:this.Description.trim(),
      restauranttype: this.restauranttype.trim(),
      TypeOfBusiness:this.TypeOfBusiness.trim(),

      
     sensitivePreferences:  this.sensitivePreferences,
      links:  this.linksUrl,
      priceRange: this.priceRange.trim(),      
      facilities: this.facilities.trim(),
      moreInfo: this.moreInfo.trim()

      /*location_in_map: this.location_in_map,
    */
    }

    this.isLoading = true
    this.resColl = this.afs.collection("resturant").doc(this.namePlace).set(obj).then(res => {
      this.isLoading = false
      this.router.navigate(['/main-screen']) //  when the firebase returned, we will go back home
    })

    //this.resColl.add(obj)
  }
  ngOnInit() {
    this.resColl = this.afs.collection("resturant");
  }
  logout() {
    this.authService.logout();
  }
}


