import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { ShowComponent } from './show.component';

import { LoginGuard } from './login-guard.service';

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full'
    },
    {
        path: 'show',
        component: ShowComponent,
        canActivate: [LoginGuard],
        pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: '/show',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }