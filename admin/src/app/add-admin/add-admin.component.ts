import { Component, OnInit } from '@angular/core';
import { AuthService } from '..//servises/auth.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  email: string;
  password: string;
  constructor(public authService: AuthService) { }

  signup() {
    console.log("signup in add admin"+this.email+ " "+this.password);
    this.authService.signup(this.email, this.password);

    this.email = this.password = '';
  }
  ngOnInit() {
  }

}
