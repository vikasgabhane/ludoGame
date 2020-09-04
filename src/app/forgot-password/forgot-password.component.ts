import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  public uiInvalidCredential = false;
  public uiInvalidCredential1 = false;

  public fbFormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password1: ['', [Validators.required, Validators.minLength(6)]],

  });

  constructor(
    private router: Router,
    private http: HttpClient,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  async changePassword() {
    const data = this.fbFormGroup.value;

    if (this.fbFormGroup.get('password').value !== this.fbFormGroup.get('password1').value) {
      this.uiInvalidCredential = true;
    }
    else {
      const url1 = 'http://localhost:3000/checkUser';
      const result1: any = await this.http.post(url1, data).toPromise();

      if (result1.opr) {

        // ajax call
        const url = 'http://localhost:3000/changePass';
        const result: any = await this.http.post(url, data).toPromise();
        alert("Password Changed..");
        this.router.navigate(['login']);
      }
      else {
        this.uiInvalidCredential1 = true;
      }
    }


  }

}
