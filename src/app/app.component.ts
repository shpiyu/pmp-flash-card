import { Component, VERSION } from '@angular/core';
import { LoginDetail } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  onLoginSubmit(loginDetail: LoginDetail): void {
    console.log('main', loginDetail);
    console.log(typeof loginDetail);
  }
}
