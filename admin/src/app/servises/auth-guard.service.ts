import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../servises/auth.service';

@Injectable()
export class AuthGuardService {// this service handle rout security.
  constructor(private router: Router, private auth: AuthService) { }

  /**
   * check if login - if no deny to move between the page of the admin
   */
  canActivate() { //returns true, the user can activate the route. When canActivate returns false, the user cannot access the route.
    if (this.auth.isLoggedIn()) //in case thier is a user that logged in right now
      return true;//ture means --> rout to the requested page
    this.router.navigate(['/login']);//if false go by default to the loginScreen.
    return false;
  }

}