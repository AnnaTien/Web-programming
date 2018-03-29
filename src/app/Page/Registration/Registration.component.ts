import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
@Component({
    selector: "registration",
    templateUrl: "Registration.component.html"
})

export class RegistrationComponent {
    constructor(private routing: Router) {
    }  
    showtext = true;
    onChange(event) {
        this.showtext = !this.showtext;
    }
}