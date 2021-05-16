import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  action: string = 'login';
  loginTitle = 'Login';
  loginSubtitle = "Don't have an account?";
  loginSubtitleAction = 'Register now';
  loginSubmitText = 'Login';

  signupTitle = 'Register';
  signupSubtitle = 'Already have an account?';
  signupSubtitleAction = 'Login now';
  signupSubmitText = 'Register';

  formText = {
    title: this.loginTitle,
    subtitle: this.loginSubtitle,
    subtitleAction: this.loginSubtitleAction,
    submitText: this.loginSubmitText
  };

  @Input() error: string | null;
  @Output() submitEM = new EventEmitter<LoginDetail>();

  ngOnInit(): void {}

  onSubmit() {
    if (this.form.valid) {
      this.submitEM.emit({ action: this.action, ...this.form.value });
    }
  }

  onActionClick() {
    console.log('clicked');
    if (this.action == 'login') {
      this.action = 'signup';
      this.formText = {
        title: this.signupTitle,
        subtitle: this.signupSubtitle,
        subtitleAction: this.signupSubtitleAction,
        submitText: this.signupSubmitText
      };
    } else {
      this.action = 'login';
      this.formText = {
        title: this.loginTitle,
        subtitle: this.loginSubtitle,
        subtitleAction: this.loginSubtitleAction,
        submitText: this.loginSubmitText
      };
    }
  }
}

export interface LoginDetail {
  action: string;
  email: string;
  password: string;
}
