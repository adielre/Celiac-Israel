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

//bootstrap import
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


//login import:
import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { routing } from './app.rout';
import { MainScreenComponent } from './main-screen/main-screen.component';
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
    MainScreenComponent
  ],
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
    RouterModule.forRoot(routing)

  ],
 
  providers: [AuthService],//maybe also:  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
