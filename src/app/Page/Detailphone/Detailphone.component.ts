import { Component, OnInit, ViewChild } from '@angular/core';
import { AppApi } from '../../app.api';
import { Router, ActivatedRoute, NavigationStart } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
    selector: "detail-phone",
    templateUrl: "Detailphone.component.html",
})

export class DetailphoneComponent {
    sametype = null;
    samecompany = null;
    productid: any = null;
    detailproduct: any = null;
    sub: any = null;
    constructor(private activatedRoute: ActivatedRoute,
        private routing: Router, private http: HttpClient) {
        this.sub = this.activatedRoute.queryParams.subscribe(params => {
            if (params.product_id) {
                this.productid = params.product_id;
                this.http.get("http://127.0.0.1:3000/api/productbyid/" + this.productid).subscribe(data => {
                    this.detailproduct = data;
                    this.http.get("http://127.0.0.1:3000/api/productcatalog/" + this.detailproduct.catalog_id).subscribe(data => {
                        this.sametype = data;
                    });
                    this.http.get("http://127.0.0.1:3000/api/productcompany/" + this.detailproduct.company_id).subscribe(data => {
                        this.samecompany = data;
                    });
                    console.log("detailproduct", this.detailproduct);
                });
            }
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}