import { Component } from '@angular/core';
import { MatCardModule } from "@angular/material/card"
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [LoginService],
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {}
