import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './page/HomePage/HomePage.component';
import { TeammemberComponent } from './Page/Teammember/Teammember.component';
import { RegistrationComponent } from './Page/Registration/Registration.component';
const routes: Routes = [
    { path: '', redirectTo: 'registration', pathMatch: 'full' },
    { path: 'homepage', component: HomePageComponent },
    { path: 'teammember', component: TeammemberComponent }  ,
    { path: 'registration', component: RegistrationComponent }
    ];

export const Routing = RouterModule.forRoot(routes, { useHash: true });
