import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit { //19.1 è stato creato questo compoennte dalla riga di comando e vediamo che ha già l'ngOnint() //19.2 possiamo testarlo andando ad inserirlo su app.component.html

  constructor() { }

  ngOnInit() {
  }

}
