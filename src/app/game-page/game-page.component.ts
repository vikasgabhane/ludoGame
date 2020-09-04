import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
  public dicevalue1: number = 0;
  public dicevalue2: number = 0;
  public dicevalue3: number = 0;
  public dicevalue4: number = 0;
  constructor(private router: Router) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('sid')) {
      this.router.navigate(['login']);
    }
  }

  diceroll1() {
    //dicesound.play();
    var num = Math.floor((Math.random() * 6) + 1);
    //pmove = num;
    this.dicevalue1 = num;
    //    if(num==6){
    //moves[pno] = num;
    //motionOn(pno);
    //diceRotation(pno);

    /*---------------------
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
  
    var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
  
    var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
  
    var image1 = document.querySelectorAll("img")[0];
  
    image1.setAttribute("src", randomImageSource);
    --------------------------------*/
  }
  diceroll2() {
    //dicesound.play();
    var num = Math.floor((Math.random() * 6) + 1);
    //pmove = num;
    this.dicevalue2 = num;
  }
  diceroll3() {
    //dicesound.play();
    var num = Math.floor((Math.random() * 6) + 1);
    //pmove = num;
    this.dicevalue3 = num;
  }
  diceroll4() {
    //dicesound.play();
    var num = Math.floor((Math.random() * 6) + 1);
    //pmove = num;
    this.dicevalue4 = num;
  }


}
