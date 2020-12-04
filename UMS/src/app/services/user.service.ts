import { Injectable } from '@angular/core';
import { User } from '../interfaces/user'; //23.1Creaiamo una cartella service e dentro ci metto il file del service

@Injectable() //17.7 per dire ad Anular che questo servizio ha delle dipendenze  e che questo servizio verrà iniettato e dovrà risolvere tutte le dipendenze di questo servizo noi possiamo mettere un decoratore che si chiama @Injectable() 
export class UserService { //17.1 creo questa classe UserService
                           //17.3 Andrà a richiamare questa classe con la DI in users.component.ts

    users: User[] = [ //23.4Torniamo su users.service.ts . Come possiamo dire che questa variabile deve essere un Array di user?
        {             
            name : 'Cristian1',
            lastname: 'Gio1',
            email: 'cris@gmail.com',
            fiscalcode: 'ASDFGHJKLQ4345',
            province: 'Torino',
            phone: '432432532452',
            age: 43,            

        },
        {
            name : 'Cristian2',
            lastname: 'Gio2',
            email: 'cris@gmail.com',
            fiscalcode: 'ASDFGHJKLQ4345',
            province: 'Torino',
            phone: '432432532452',
            age: 43
        },
        {
            name : 'Cristian3',
            lastname: 'Gio3',
            email: 'cris@gmail.com',
            fiscalcode: 'ASDFGHJKLQ4345',
            province: 'Torino',
            phone: '432432532452',
            age: 43
        }

    ];

    constructor(){
            }   

    getUsers(){ //22.3 Nel getUsers() metto return this.users così ho la possibilità di ritornare gli utenti
        return this.users;
    }

    deleteUser(user){ ////22.4 Mentre aggiungo un nuovo metodo deleteUser(user) ovveor che riceve un utente e poi ci cancella con il metodo splice. Il metodo splice necesita della posizione dell’utente che vogliamo eliminare e quanti elementi vogliamo eliminare (in questo caso solo 1) . Quindi per trovare l’indice  facciamo let index = this.users.indexOf(user); In questo caso diciamo che vogliamo eliminare solo un utente a partire da quella posizione
        let index = this.users.indexOf(user);
        if(index >=0){
            this.users.splice(index, 1);
        }
        
    }
}