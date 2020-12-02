import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tr[app-user]', 
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit { //19.1 è stato creato questo compoennte dalla riga di comando e vediamo che ha già l'ngOnint() //19.2 possiamo testarlo andando ad inserirlo su app.component.html
@Input('user-data') user  //20.2) Per poter utilizzare la variabile user nel componente app-user è necessario dichiararlo qui.  Ma in più dobbiamo dire che è una variabile di tipo input. ovvero che è printa a ricevere dati, mettendo il decoratore @Input() a cui all'interno posso mettere anche un alias chiamato "user-data". 20.4)dentro il decoratore possiamo mettre anche l'alias user-data (che deve essere presente anche in users.component.html)
  constructor() { }

  ngOnInit() {
  }
  deleteUser(){ //21.4) metto questo evento deleteUser() in user.component.ts
    alert(this.user.lastname)
  }
}




