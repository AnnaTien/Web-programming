import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
const routes: Routes = [
    {   path: "admin",
        component: AdminComponent,
        children:[
        { path:'', redirectTo: 'dashboard', pathMatch: 'full' },
        { path:'dashboard', loadChildren: "./dashboard.component.module"}
    ] }
]
export const Routing = RouterModule.forRoot(routes, { useHash: true });
