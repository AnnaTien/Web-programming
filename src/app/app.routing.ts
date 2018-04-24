import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeworkComponent } from './Page/Homework/Homework.component';
import { RegistrationComponent } from './Page/Registration/Registration.component';
import { TeammemberComponent } from './Page/Teammember/Teammember.component';
import { HomePageComponent } from './Page/home-page/home-page.component';
import { PhoneComponent } from './Page/phone/phone.component';
import { PadComponent } from './Page/pad/pad.component';
const routes: Routes = [
    { path: '', redirectTo: 'homepage', pathMatch: 'full' },
    { path: 'homepage', component: HomePageComponent },
    { path: 'phone', component: PhoneComponent },
    { path: 'phone/:phonecode', component: PhoneComponent },
    { path: 'pad', component: PadComponent },
    { path: 'pad/:padcode', component: PadComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'teammember', component: TeammemberComponent }
    ];

export const Routing = RouterModule.forRoot(routes, { useHash: true });
