import { Template } from '@angular/compiler/src/render3/r3_ast';

import {Component} from '@angular/core';

@Component({  //14.5)per mettere questo è necessario l'import del component
    selector: 'app-users', //14.6)richiamo questo componente  in app-component.html
    templateUrl: './users.component.html', //14.7) aggiungo il file users.component.html
    styleUrls: ['./users.component.css']  //14.8) Aggiungo il file users.component.css
    
})

export class UsersComponent{  //14.2) Per Creare il componente manualmente, creo la classe UsersComponent,  14.3)e dichiaro  questa classe in app.module.ts, 14.4)di conseguenza richiamo il @Component,

}