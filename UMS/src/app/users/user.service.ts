export class UserService { //17.1 creo questa classe UserService
                           //17.3 Andrà a richiamare questa classe con la DI in users.component.ts
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