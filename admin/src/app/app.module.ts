import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from "angularfire2";
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from "angularfire2/firestore"
import { AngularFireAuthModule } from "angularfire2/auth"
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddEditScreenComponent } from './add-edit-screen/add-edit-screen.component';
import { LoginComponent } from './login/login.component'

//popup messege when deleting restaurant
import {MatDialogModule} from '@angular/material/dialog';

//bootstrap import
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import {MatIconModule} from '@angular/material/icon';


//login import:
import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { routing } from './app.rout';
import { MainScreenComponent, MainScreenPopupComponent } from './main-screen/main-screen.component';
import { FirebaseService } from './firebase-service/firebase.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    AddEditScreenComponent,
    LoginComponent,
    MainScreenComponent,
    MainScreenPopupComponent
    
  ],
  entryComponents: [MainScreenPopupComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule, 
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    //MatIconModule,
    RouterModule.forRoot(routing)

  ],
 
  providers: [AuthService],//maybe also:  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
