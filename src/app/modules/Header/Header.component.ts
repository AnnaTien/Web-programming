import { Component, OnInit } from '@angular/core';
import { AppApi } from '../../app.api'
import { HttpClient } from '@angular/common/http';

@Component({
    selector: "eportal-header",
    templateUrl: "./Header.component.html",
    providers: [AppApi]
})

export class HeaderComponent {
    AppApi: AppApi = new AppApi();
    _Categories = this.AppApi.Categories;
    _Suppliers = this.AppApi.Suppliers;
    newest = this.AppApi.Products;
    buyest = this.AppApi.Products;
    viewest = this.AppApi.Products;

    lcatalog: any = null;
    lcompany: any = null;
    constructor(private http: HttpClient) {

    }
    iconsSelect: Array<any>;

    ngOnInit() {
        this.http.get("http://127.0.0.1:3000/api/catalog").subscribe(data => {
            if (data) {
                this.lcatalog = data;
                console.log("lcatalog", this.lcatalog);
            }

        });
        this.http.get("http://127.0.0.1:3000/api/company").subscribe(data => {
            if (data) {
                this.lcompany = data;
                console.log("lcompany", this.lcompany);
            }
        });
    }
    // hcmus() {
    //     var urlPre = 'https://www.hcmus.edu.vn';
    //     var windowChild = window.open(urlPre, "windowChild");
    // }
    // courses() {
    //     var urlPre = 'https://courses.fit.hcmus.edu.vn';
    //     var windowChild = window.open(urlPre, "windowChild");
    // }
    // portal() {
    //     var urlPre = 'https://portal.hcmus.edu.vn';
    //     var windowChild = window.open(urlPre, "windowChild");
    // }
    // w3schools() {
    //     var urlPre = 'https://www.w3schools.com';
    //     var windowChild = window.open(urlPre, "windowChild");
    // }
    // telerik() {
    //     var urlPre = 'https://www.telerik.com';
    //     var windowChild = window.open(urlPre, "windowChild");
    // }
    // getbootstrap() {
    //     var urlPre = 'https://getbootstrap.com';
    //     var windowChild = window.open(urlPre, "windowChild");
    // }
    // angular() {
    //     var urlPre = 'https://angular.io';
    //     var windowChild = window.open(urlPre, "windowChild");
    // }
    // mdbootstrap() {
    //     var urlPre = 'https://mdbootstrap.com';
    //     var windowChild = window.open(urlPre, "windowChild");
    // }
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
