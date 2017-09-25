import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {


  constructor(public router:Router) { }

  public score:number = 0;



  public count():void{
    let color = window.getComputedStyle(document.getElementById('first')).backgroundColor;
    if (color == 'rgb(255, 255, 255)'){
      this.score = this.score + 10;
     }else {
      sessionStorage.setItem('score', this.score.toString())
      this.router.navigate(['score', {score : this.score}])
    }

    }

  ngOnInit() {

    var firstDiv = document.getElementById('first');
    var secondDiv = document.getElementById('second');
    var thirdDiv = document.getElementById('third');
    var fourthDiv = document.getElementById('fourth');

    var array = [firstDiv, secondDiv, thirdDiv, fourthDiv];



    function getRandomInt(min:number , max: number) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }

    function changeColor (){
      let randomNum = getRandomInt(0, 4);
      array[randomNum].style.backgroundColor = 'white';
    }

    function revertColor (){
      let randomNum = getRandomInt(0, 4);
      array[randomNum].style.backgroundColor  = '#FF7256';
    }
    setInterval(function(){
      revertColor()
    }, 500)
    setInterval(function(){
      changeColor()
    }, 1000)

    setTimeout((router: Router) => {
      this.router.navigate(['score', {score : this.score}])
    }, 120000);

    }


}
