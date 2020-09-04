import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('sid')) {
      this.router.navigate(['login']);
    }
  }

  start2() {

    this.router.navigate(['game']);
  }

  logoutProcess() {
    sessionStorage.removeItem('sid');
    this.router.navigate(['login']);
  }

}
