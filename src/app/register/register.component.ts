import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public uiInvalidCredential = false;
  public uiInvalidCredential1 = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  public fbFormGroup = this.fb.group({
    fname: ['', Validators.required],
    lname: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    mobile: ['', Validators.required],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }



  async register() {
    const data = this.fbFormGroup.value;
    const url = 'http://localhost:3000/adduser';

    const result: any = await this.http.post(url, data).toPromise();
    if (result.opr) {
      this.router.navigate(['login']);
    }
    else {
      this.uiInvalidCredential = true;
    }

    /*const url1 = 'http://localhost:3000/checkUser';
    const result1: any = await this.http.post(url1, data).toPromise();
    if (result1.opr) {
      const url2 = 'http://localhost:3000/checkEmail';
      const result2: any = await this.http.post(url2, data).toPromise();
      if (result2.opr) {
        const url = 'http://localhost:3000/adduser';

        const result: any = await this.http.post(url, data).toPromise();
    if (result.opr) {
      this.router.navigate(['login']);
    }
    else {
      this.uiInvalidCredential = true;
    }

      } else {
        this.uiInvalidCredential1 = true;
      }

    } else {
      this.uiInvalidCredential = true;
    }*/

  }

}
