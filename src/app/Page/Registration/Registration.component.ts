import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
@Component({
    selector: "Registration",
    templateUrl: "Registration.component.html"
})

export class RegistrationComponent {
    constructor(private routing: Router) {
    }  
}