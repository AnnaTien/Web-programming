import { Component, OnInit } from '@angular/core';

@Component({
    selector: "eportal-footer",
    templateUrl: "./Footer.component.html",
    

})

export class FooterComponent  {
    private hospital;
    constructor() {       
       
    }    
    facebook(){
        var urlPre ='https://vi-vn.facebook.com';
        var windowChild = window.open(urlPre, "windowChild");
    }
    pinterest(){
        var urlPre ='https://www.pinterest.com';
        var windowChild = window.open(urlPre, "windowChild");
    }
    googleplus(){
        var urlPre ='https://plus.google.com';
        var windowChild = window.open(urlPre, "windowChild");
    }
    twitter(){
        var urlPre ='https://twitter.com';
        var windowChild = window.open(urlPre, "windowChild");
    }
    linkedin(){
        var urlPre ='https://www.linkedin.com';
        var windowChild = window.open(urlPre, "windowChild");
    }
    github(){
        var urlPre ='https://github.com';
        var windowChild = window.open(urlPre, "windowChild");
    }
    instagram(){
        var urlPre ='https://www.instagram.com';
        var windowChild = window.open(urlPre, "windowChild");
    }

}