import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Routing } from "./app.routing";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
import { MDBBootstrapModule } from './typescripts/free/index';
import { MDBBootstrapModulePro } from './typescripts/pro/index';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/Header/Header.component';
import { FooterComponent } from './modules/Footer/Footer.component';
import { HomeworkComponent } from './Page/Homework/Homework.component';
import { RegistrationComponent } from './Page/Registration/Registration.component';
import { TeammemberComponent } from './Page/Teammember/Teammember.component';
import { HomePageComponent } from './page/HomePage/HomePage.component';
import { DetailphoneComponent } from './Page/Detailphone/Detailphone.component';
import { ShowphoneComponent } from './Page/Showphone/Showphone.component';
import { AdministratorComponent } from './Page/Administrator/Administrator.component';
import { ProductsComponent } from './Page/Administrator/Products/Products.component';
import { SuppliersComponent } from './Page/Administrator/Suppliers/Suppliers.component';
import { CategoriesComponent } from './Page/Administrator/Categories/Categories.component';
import { BillsComponent } from './Page/Administrator/Bills/Bills.component';
import { AcessDeniedComponent } from './Page/AcessDenied/AcessDenied.component';



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeworkComponent,
        HomePageComponent,
        RegistrationComponent,
        TeammemberComponent,
        DetailphoneComponent,
        ShowphoneComponent,
        AdministratorComponent,
        ProductsComponent,
        SuppliersComponent,
        CategoriesComponent,
        BillsComponent,
        AcessDeniedComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        Routing,
        NgbModule.forRoot(),
        MDBBootstrapModule.forRoot(),
        MDBBootstrapModulePro.forRoot(),
        HttpModule,
        HttpClientModule,

    ],

    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
    constructor(private injector: Injector) {

    }
}
