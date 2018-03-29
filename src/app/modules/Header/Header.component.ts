import { Component, OnInit } from '@angular/core';

@Component({
    selector: "eportal-header",
    templateUrl: "./Header.component.html",
})

export class HeaderComponent {

    constructor() {

    }
    iconsSelect: Array<any>;

    ngOnInit() {
        this.iconsSelect = [
            { value: '1', label: 'Nam', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg' },
            { value: '2', label: 'Nữ', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg' },
        ];
    }
    hcmus() {
        var urlPre = 'https://www.hcmus.edu.vn';
        var windowChild = window.open(urlPre, "windowChild");
    }
    courses() {
        var urlPre = 'https://courses.fit.hcmus.edu.vn';
        var windowChild = window.open(urlPre, "windowChild");
    }
    portal() {
        var urlPre = 'https://portal.hcmus.edu.vn';
        var windowChild = window.open(urlPre, "windowChild");
    }
    w3schools() {
        var urlPre = 'https://www.w3schools.com';
        var windowChild = window.open(urlPre, "windowChild");
    }
    telerik() {
        var urlPre = 'https://www.telerik.com';
        var windowChild = window.open(urlPre, "windowChild");
    }
    getbootstrap() {
        var urlPre = 'https://getbootstrap.com';
        var windowChild = window.open(urlPre, "windowChild");
    }
    angular() {
        var urlPre = 'https://angular.io';
        var windowChild = window.open(urlPre, "windowChild");
    }
    mdbootstrap() {
        var urlPre = 'https://mdbootstrap.com';
        var windowChild = window.open(urlPre, "windowChild");
    }
    facebook() {
        var urlPre = 'https://vi-vn.facebook.com';
        var windowChild = window.open(urlPre, "windowChild");
    }
    pinterest() {
        var urlPre = 'https://www.pinterest.com';
        var windowChild = window.open(urlPre, "windowChild");
    }
    googleplus() {
        var urlPre = 'https://plus.google.com';
        var windowChild = window.open(urlPre, "windowChild");
    }
    twitter() {
        var urlPre = 'https://twitter.com';
        var windowChild = window.open(urlPre, "windowChild");
    }
   

}
