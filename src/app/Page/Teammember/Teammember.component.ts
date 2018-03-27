//ndtich

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
@Component({
    selector: "team-member",
    templateUrl: "teammember.component.html"
})

export class TeammemberComponent {
    constructor(private routing: Router) {
    }
    Food(){
        var urlPre ='https://www.theguardian.com/lifeandstyle/food-and-drink';
        var windowChild = window.open(urlPre, "windowChild");
    }
    Lifestyle(){
        var urlPre ='https://www.theguardian.com/uk/lifeandstyle';
        var windowChild = window.open(urlPre, "windowChild");
    }
    Travels(){
        var urlPre ='https://www.theguardian.com/uk/travel';
        var windowChild = window.open(urlPre, "windowChild");
    }
}