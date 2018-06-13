import { Component, OnInit, Inject } from '@angular/core';
import { Restaurant } from '../Restaurant';
import { AngularFirestore } from 'angularfire2/firestore';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FirebaseService } from '../firebase-service/firebase.service';


@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  restaurants: Array<Restaurant> = []

  constructor(private firebase: AngularFirestore, public dialog: MatDialog) { }

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
  
  openDialog(): void {
    let dialogRef = this.dialog.open(MainScreenPopupComponent, {
      width: '250px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }  
}
  



@Component({
    selector: 'main-screen-popup',
    templateUrl: './main-screen-popup.component.html',
    
  })

  export class MainScreenPopupComponent{

    constructor(
      public dialogRef: MatDialogRef<MainScreenPopupComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,private firebase: AngularFirestore) { }

      onNoClick(): void {
        this.firebase.collection('resturant').doc('חעיכגדס').delete();
        this.dialogRef.close();
      }
s
      

  }

  

 
  
    
  
  
    
   
  
   
 

 

