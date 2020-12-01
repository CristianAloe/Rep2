import { Injectable } from '@angular/core';

@Injectable() //17.7 per dire ad Anular che questo servizio ha delle dipendenze  e che questo servizio verrà iniettato e dovrà risolvere tutte le dipendenze di questo servizo noi possiamo mettere un decoratore che si chiama @Injectable() 
export class UserService { //17.1 creo questa classe UserService
                           //17.3 Andrà a richiamare questa classe con la DI in users.component.ts
    constructor(){
            }                      
    getUsers(){
        return [ //17.2 Sposto i dati da user.component.ts a user.service.ts 
            {
                name : 'Cristian1',
                lastname: 'Gio1',
                email: 'cris@gmail.com',
                fiscalcode: 'ASDFGHJKLQ4345',
                province: 'Torino',
                phone: '432432532452',
                age: 43
    
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

        ]
    }
}