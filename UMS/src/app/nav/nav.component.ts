import { Component, EventEmitter,  OnInit, Output } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
@Output() onNewUser = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  newUser(){
    this.onNewUser.emit(); //37.1 in newUser() emettiamo questo evento in modo che possa essere catturato dal componente padre che in questo caso è l'app.module.ts
  }
}
