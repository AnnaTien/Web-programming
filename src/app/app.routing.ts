import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeworkComponent } from './Page/Homework/Homework.component';
const routes: Routes = [
    { path: '', redirectTo: 'homework', pathMatch: 'full' },
    { path: 'homework', component: HomeworkComponent }
    ];

export const Routing = RouterModule.forRoot(routes, { useHash: true });
