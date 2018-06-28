import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeworkComponent } from './Page/Homework/Homework.component';
import { TeammemberComponent } from './Page/Teammember/Teammember.component';
import { HomePageComponent } from './page/HomePage/HomePage.component';
import { DetailphoneComponent } from './Page/Detailphone/Detailphone.component';
import { ShowphoneComponent } from './Page/Showphone/Showphone.component';
import { AdministratorComponent } from './Page/Administrator/Administrator.component';
import { AcessDeniedComponent } from './Page/AcessDenied/AcessDenied.component';
import { CartComponent } from './Page/Cart/Cart.component';
import { SettingComponent } from './Page/Setting/Setting.component';
const routes: Routes = [
    { path: '', redirectTo: 'homepage', pathMatch: 'full' },
    { path: 'homepage', component: HomePageComponent },
    { path: 'homework', component: HomeworkComponent },
    { path: 'teammember', component: TeammemberComponent },
    { path: 'detailphone', component: DetailphoneComponent },
    { path: 'showphone', component: ShowphoneComponent },
    { path: 'admin', component: AdministratorComponent },
    { path: 'acessdenied', component: AcessDeniedComponent },
    { path: 'cart', component: CartComponent },
    { path: 'setting', component: SettingComponent }

];

export const Routing = RouterModule.forRoot(routes, { useHash: true });
