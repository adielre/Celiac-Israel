import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  user: Observable<firebase.User>;
  userLoggin: boolean ;
  constructor(private firebaseAuth: AngularFireAuth) { 
    this.user = firebaseAuth.authState;
    this.userLoggin = false;
  }
  signup(email: string, password: string) {
    return this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
  }

  login(email: string, password: string) {
    return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
      this.userLoggin = false;
  }

/**
 *  this method return true in case the user is logged in, and false otherwise
 */

  isLoggedIn(){
    console.log(" ");
    console.log("isLoggedIn");
    console.log("this.userLoggin "+ this.userLoggin);
    console.log(this.user);
    console.log("^");
   // if( !!this.user)
    if (this.userLoggin == false)
      return false;
    else
      return true;
  }

}
