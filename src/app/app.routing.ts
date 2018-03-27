import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './page/HomePage/HomePage.component';
import { TeammemberComponent } from './Page/Teammember/Teammember.component';
const routes: Routes = [
    { path: '', redirectTo: 'homepage', pathMatch: 'full' },
    { path: 'homepage', component: HomePageComponent },
    { path: 'teammember', component: TeammemberComponent }   
    ];

export const Routing = RouterModule.forRoot(routes, { useHash: true });
