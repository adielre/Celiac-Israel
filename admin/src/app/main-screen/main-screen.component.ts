import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../Restaurant';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  restaurants: Array<Restaurant> = []

  constructor(private firebase: AngularFirestore) { }

  ngOnInit() {
    this.firebase.collection('resturant').valueChanges()
      .subscribe(
        res => {
          for (let i = 0; i < res.length; i++) {
            this.restaurants.push(new Restaurant(res[i]))
          }
        },
        err => { console.log(err) }
      )
  }
  
  // deleteResturant(event,resturant)
  // {
  //   this.resturantService.deleteResturant(resturant);
  // }
}

