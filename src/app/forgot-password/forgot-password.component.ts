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

  public fbFormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    password1: ['', Validators.required],

  });

  constructor(
    private router: Router,
    private http: HttpClient,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  async changePassword() {
    if (this.fbFormGroup.get('password').value !== this.fbFormGroup.get('password1').value) {
      this.uiInvalidCredential = true;
    }
    else {
      const data = this.fbFormGroup.value;
      // ajax call
      const url = 'http://localhost:3000/changePass';
      const result: any = await this.http.post(url, data).toPromise();
      alert("Password Changed..");
      this.router.navigate(['login']);
    }


  }

}
