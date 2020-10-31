import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, CanActivate, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public errorFlag = false;
  constructor(
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit(submitBtn: HTMLButtonElement) {
    submitBtn.disabled = true;
    this.errorFlag = false;
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;
    if (userName === 'admin' && password === 'admin123') {
      const obj = {
        userName: userName
      }
      localStorage.setItem('currentUser', JSON.stringify(obj));
      this.router.navigate(['/admin']);
    } else if (userName === 'user') {
      const obj = {
        userName: userName
      }
      localStorage.setItem('currentUser', JSON.stringify(obj));
      this.router.navigate(['/user']);
    } else {
      this.errorFlag = true;
    }
    submitBtn.disabled = false;
  }

}
