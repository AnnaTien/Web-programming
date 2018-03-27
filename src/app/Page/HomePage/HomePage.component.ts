//ndtich

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
@Component({
    selector: "home-page",
    templateUrl: "HomePage.component.html"
})

export class HomePageComponent {
    constructor(private routing: Router) {
    }   
}