import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Routing } from "./app.routing";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from "@angular/http";
import { HomePageComponent } from './page/HomePage/HomePage.component'; 
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
import { MDBBootstrapModule } from './typescripts/free/index';
import { MDBBootstrapModulePro } from './typescripts/pro/index';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/Header/Header.component';
import { FooterComponent } from './modules/Footer/Footer.component';
import { TeammemberComponent } from './Page/Teammember/Teammember.component';
import { RegistrationComponent } from './Page/Registration/Registration.component';

@NgModule({
    declarations: [
        AppComponent,       
        HeaderComponent,
        FooterComponent,       
        HomePageComponent,
        TeammemberComponent,
        RegistrationComponent
       
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
