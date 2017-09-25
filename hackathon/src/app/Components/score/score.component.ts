import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],

})
export class ScoreComponent implements OnInit {

  constructor(private route:ActivatedRoute, private http:HttpClient ) { }

  public totalScore:any;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.totalScore = params.score;
    })

    var score = document.getElementById('score');
    score.innerHTML = this.totalScore;

    var details = {
      "email": sessionStorage.getItem('email'),
      "id" : sessionStorage.getItem('id'),
      "username" : sessionStorage.getItem('username'),
      "score" : sessionStorage.getItem('score')
    }

    this.http.post('http://localhost:3000/players/scores', details).subscribe((data)=> {
      console.log(data)
    })


    var socket = io();
        socket.on('otherPlayer', function(data){
          console.log(data)
        })
        socket.emit('playerDetails', details)
  }

}
