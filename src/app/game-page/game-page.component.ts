import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
  public dicevalue1: string = "assets/images/dice6.png";
  public dicevalue2: string = "assets/images/dice6.png";
  public dicevalue3: string = "assets/images/dice6.png";
  public dicevalue4: string = "assets/images/dice6.png";

  constructor(private router: Router) { }

  ngOnInit(): void {

    if (!sessionStorage.getItem('sid')) {
      this.router.navigate(['login']);
    }
  }

  diceroll1() {
    var audio = new Audio();
    audio.src = "assets/dice.mp3";
    audio.play();
    var num = Math.floor((Math.random() * 6) + 1);
    var randomDiceImage: string = "dice" + num + ".png";
    var randomImageSource: string = "assets/images/" + randomDiceImage;
    //pmove = num;
    this.dicevalue1 = randomImageSource;
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
    var audio = new Audio();
    audio.src = "assets/dice.mp3";
    audio.play();
    var num = Math.floor((Math.random() * 6) + 1);
    var randomDiceImage: string = "dice" + num + ".png";
    var randomImageSource: string = "assets/images/" + randomDiceImage;
    //pmove = num;
    this.dicevalue2 = randomImageSource;
  }
  diceroll3() {
    var audio = new Audio();
    audio.src = "assets/dice.mp3";
    audio.play();
    var num = Math.floor((Math.random() * 6) + 1);
    var randomDiceImage: string = "dice" + num + ".png";
    var randomImageSource: string = "assets/images/" + randomDiceImage;
    //pmove = num;
    this.dicevalue3 = randomImageSource;
  }
  diceroll4() {
    var audio = new Audio();
    audio.src = "assets/dice.mp3";
    audio.play();
    var num = Math.floor((Math.random() * 6) + 1);
    var randomDiceImage: string = "dice" + num + ".png";
    var randomImageSource: string = "assets/images/" + randomDiceImage;
    //pmove = num;
    this.dicevalue4 = randomImageSource;
  }


}
