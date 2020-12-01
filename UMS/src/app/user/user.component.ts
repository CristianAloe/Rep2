import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit { //19.1 è stato creato questo compoennte dalla riga di comando e vediamo che ha già l'ngOnint() //19.2 possiamo testarlo andando ad inserirlo su app.component.html
@Input() user  //20.2) Per poter utilizzare la variabile user nel componente app-user è necessario dichiararlo qui.  Ma in più dobbiamo dire che è una variabile di tipo input. ovvero che è printa a ricevere dati, mettendo il decoratore @Input() a cui all'interno posso mettere anche un alias chiamato "user-data"
  constructor() { }

  ngOnInit() {
  }

}




