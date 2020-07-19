import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth-guard.service';
import {CanDeactivateGuard} from './servers/edit-server/can-deactivate-guard.service';
import {ErrorPageComponent} from './error-page/error-page.component';

// const appRoutes:Routes=[
//   {path:'', component:HomeComponent},
//   {path:'users', component:UsersComponent,children:[{path:':id/:name',component:UserComponent}]},
//   {path:'servers', component:ServersComponent,children:[{path:':id/edit',component:EditServerComponent},
//   {path:':id',component:ServerComponent}]},
//   {path:'not-found',component:PageNotFoundComponent},
//   {path:'**',redirectTo:'/not-found',pathMatch:'full'}
  
// ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,PageNotFoundComponent,ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ServersService,AuthService,AuthGuard,CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

// appRoutes will hold all the routes our application has

// once the path is loaded we have to tell angular which component should be loaded i.e. which page should be loaded

//  RouterModule.forRoot(appRoutes) is used for registering our routes in angular router

// router outlet will provide place in the dom to render our components related to the selected path

// users/:id :tells angular that it is dynamic part of the path with out colon it will simply take it as static path

// ** is used for all the wrong paths entered by the  user and it will redirect to page not found component

// and it should placed at the end of all the routes because routes are parsed in order in angular