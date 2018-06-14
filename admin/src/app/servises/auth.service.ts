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
    console.log("signup");
    console.log(email);
    console.log(email);
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);

      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });  
      console.log("signup end");  
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
      this.userLoggin = true;
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
    console.log("this.userLoggin");
    console.log(this.userLoggin);
    if (this.userLoggin == false)
      return false;
    else
      return true;
  }

}
