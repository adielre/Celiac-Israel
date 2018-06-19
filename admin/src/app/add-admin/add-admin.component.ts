import { Component, OnInit } from '@angular/core';
import { AuthService } from '..//servises/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  email: string;
  password: string;
  isLoading = false;
  constructor(public authService: AuthService, private router: Router) { }

  signup() {
    this.isLoading = true
    this.authService.signup(this.email, this.password).then(res => {
      alert('משתמש חדש נוסף בהצלחה :)')
      this.isLoading = false
      this.email = this.password = '';
      this.router.navigate(['/main-screen'])
    }).catch(err => {
      this.isLoading = false
      alert('לא ניתן היה ליצור משתמש חדש, יש לדאוג כי הסיסמה מכילה יותר מ-6 תווים וכי המייל אינו בשימוש.')
      this.email = this.password = '';
    })

  }
  ngOnInit() {
  }

}
