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

  public fbFormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
    mobile: ['', Validators.required],
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
    // ajax call
    const url = 'http://localhost:3000/changePass';
    await this.http.post(url, data).toPromise();

    this.router.navigate(['login']);
  }

}
