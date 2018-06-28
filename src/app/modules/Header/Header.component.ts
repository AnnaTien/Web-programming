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
    listorders: any = null;
    qty: number = 0;
    ngOnInit() {
        this.qty = 0;
        this.listorders = null;
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
        this.http.get("http://127.0.0.1:3000/api/ordersall").subscribe(data => {
            if (data) {
                this.listorders = data;
                for (let item of this.listorders) {
                    if (item) {
                        this.qty = this.qty + item.orders_qty;
                    }

                }
                console.log("datas", this.listorders);
            }
        })
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
