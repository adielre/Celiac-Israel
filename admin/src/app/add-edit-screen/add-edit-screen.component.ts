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
  name: string;
  address: string;
  phone: string='';
  lastmodi: string='';
  email: string='';
  restauranttype: string='';
  description: string='';
  openingTime: string='';
  website: string='';
   logo: string='';
   facebook:  string='';
  sensitivePreferences: {additionalPreferences?: string, gfMenu: boolean,sensitivity?: string,preferences?: string, accessibility: boolean, kosher: boolean}={
    additionalPreferences:"", gfMenu: false/*Gluten free menu*/,sensitivity: "",preferences: "", accessibility: false, kosher: false
  }
 /* linksUrl:{ website?: string, logo?: string ,facebook?:  string;}={
    website: "", logo:"",   facebook:  ""
  }*/
 /* location_in_map:{x:number, y: number}={
    x:0, y:0
  }*/
  
  priceRange:  string='';
  
  city: string ;
  facilities:  string='';
  moreInformation:  string='';
  TypeOfBusiness :  string='';
  
 
public save(){
    let obj = {
      name: this.name.trim(),
      address:this.address.trim(),
      city: this.city.trim(),
      phone: this.phone.trim(),
      lastmodi:this.lastmodi.trim(),
      email: this.email.trim(),
      openingTime: this.openingTime.trim(),
      description:this.description.trim(),
      restauranttype: this.restauranttype.trim(),
      TypeOfBusiness:this.TypeOfBusiness.trim(),
      website: this.website.trim(),
      logo: this.logo.trim(),
      facebook:  this.facebook.trim(),
      
      sensitivePreferences:  this.sensitivePreferences,
      //links:  this.linksUrl,
      priceRange: this.priceRange.trim(),      
      facilities: this.facilities.trim(),
      moreInformation: this.moreInformation.trim()

    }

    this.isLoading = true
    this.resColl = this.afs.collection("resturant").doc(this.name).set(obj).then(res => {
      this.isLoading = false
      this.router.navigate(['/main-screen']) //  when the firebase returned, we will go back home
    })


  }
  ngOnInit() {
    this.resColl = this.afs.collection("resturant");
  }
  logout() {
    this.authService.logout();
  }
}


