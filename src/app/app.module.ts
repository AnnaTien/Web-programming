import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Routing } from "./app.routing";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from "@angular/http";
import { HomePageComponent } from './Page/home-page/home-page.component';
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
import { PhoneComponent } from './Page/phone/phone.component';
import { PadComponent } from './Page/pad/pad.component';
import { ListProductComponent } from './Page/list-product/list-product.component';
import { AdminComponent } from './Page/admin/admin.component';
import { DashboardComponent } from './Page/admin/dashboard/dashboard.component';
import { ProductComponent } from './Page/admin/product/product.component';
import { TypeProductComponent } from './Page/admin/TypeProduct/typeproduct.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent, 
        HomeworkComponent,
        HomePageComponent,
        RegistrationComponent,
        TeammemberComponent,
        PhoneComponent,
        PadComponent,
        ListProductComponent,
        AdminComponent,
        DashboardComponent,
        ProductComponent,
        TypeProductComponent
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
