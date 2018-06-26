import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: "eportal-header",
    templateUrl: "./Header.component.html",
})

export class HeaderComponent {
    lcatalog: any = null;
    lcompany: any = null;
    constructor(private http: HttpClient) {

    }
    iconsSelect: Array<any>;

    ngOnInit() {
        this.http.get("http://127.0.0.1:3000/api/catalogall").subscribe(data => {
            if (data) {
                this.lcatalog = data;
                console.log("lcatalog", this.lcatalog);
            }

        });
        this.http.get("http://127.0.0.1:3000/api/companyall").subscribe(data => {
            if (data) {
                this.lcompany = data;
                console.log("lcompany", this.lcompany);
            }
        });
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
