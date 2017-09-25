import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gave',
  templateUrl: './gave.component.html',
  styleUrls: ['./gave.component.css']
})
export class GaveComponent implements OnInit {

  constructor(private router: Router) { }
    public username:string
    public id:string
    public email:string
  ngOnInit() {


     }
      play(){
       sessionStorage.setItem('username', this.username);
       sessionStorage.setItem('email', this.email);
       sessionStorage.setItem('id', this.id);

  }



}
