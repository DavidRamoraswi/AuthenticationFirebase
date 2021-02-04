import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './dashboard/welcome/welcome.component';
import { ProfileComponent } from './dashboard/profile/profile.component';

import { LoginComponent } from './login/login.component';
import { ResetloginComponent } from './resetlogin/resetlogin.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './dashboard/users/user/user.component';
// import { AngularFireAuth } from '@angular/fire/auth';

// import {AuthGuard} from './core/auth.guard';

const routes: Routes = [
  { path: '', redirectTo : '/login', pathMatch: 'full'},
  {path : 'login',component: LoginComponent},
  
  { path : 'register', component: RegisterComponent},
  { path : 'dashboard/:ref', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
