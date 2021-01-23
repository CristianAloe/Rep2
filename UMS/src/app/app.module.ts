import { UserService } from './services/user.service'; //17.6) e così l’editor dovrà in modo automatico importare UserService da ./users/user.service
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FormsModule } from '@angular/forms';
import{FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { NavComponent } from './nav/nav.component';
import{RouterModule, Routes} from '@angular/router';
import { UserDataComponent } from './user-data/user-data.component';

const routes: Routes = [
  {
    path:'users',   
    component: UsersComponent 
    },
    {
      path:'', //nel caso di path vuoto vogliamo che venga reindirizzato in users
      redirectTo: 'users',  //39.2 significa che quando vedono la barra si deve andare su usersComponent
      pathMatch:'full' //39.1 vuol dire che deve coincidere perfettamente
      },
    {
    path:'users/new',
    component: UserDetailComponent  
    },
    {
    path:'users/:id/edit',
    component: UserDetailComponent  
    },
    {
      path:'users/:id',
      component: UserDataComponent  
      }
]
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailComponent,
    NavComponent,
    UserDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes) //39.3 Dobbiamo dire se queste sono rotte prinncipali dell'app oppiure elenco di rote al di  sotto delle rotte
    
  ],
  providers: [UserService],//17.5)Ma questa dipendenza non sa da dove iniettarla e quindi dobbiamo andare su app.module.ts  e dobbiamo metterlo sulla voce “providers” per dirgli da dove deve essere iniettato il servizio.
  bootstrap: [AppComponent]
})
export class AppModule { }
