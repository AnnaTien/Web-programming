import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeworkComponent } from './Page/Homework/Homework.component';
import { RegistrationComponent } from './Page/Registration/Registration.component';
import { TeammemberComponent } from './Page/Teammember/Teammember.component';
import { HomePageComponent } from './page/HomePage/HomePage.component';
import { DetailphoneComponent } from './Page/Detailphone/Detailphone.component';
import { ShowphoneComponent } from './Page/Showphone/Showphone.component';
import { AdministratorComponent } from './Page/Administrator/Administrator.component';
const routes: Routes = [
    { path: '', redirectTo: 'homepage', pathMatch: 'full' },
    { path: 'homepage', component: HomePageComponent },
    { path: 'homework', component: HomeworkComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'teammember', component: TeammemberComponent },
    { path: 'detailphone', component: DetailphoneComponent },
    { path: 'showphone', component: ShowphoneComponent },
    {path:'admin', component: AdministratorComponent}
    ];

export const Routing = RouterModule.forRoot(routes, { useHash: true });
