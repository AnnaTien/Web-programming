import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
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
    catalog: any = null;
    company: any = null;
    sub: any = null;
    constructor(private activatedRoute: ActivatedRoute,
        private http: HttpClient) {
        this.productid = null;
        this.detailproduct = null;
        this.catalog = null;
        this.company = null;
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
                    this.http.get("http://127.0.0.1:3000/api/catalogbyid/" + this.detailproduct.catalog_id).subscribe(data => {
                        this.catalog = data;
                        console.log("catalog", this.catalog);
                    });
                    this.http.get("http://127.0.0.1:3000/api/companybyid/" + this.detailproduct.company_id).subscribe(data => {
                        this.company = data;
                        console.log("company", this.company)
                    });

                    console.log("detailproduct", this.detailproduct);
                });
            }
        });
    }
    listorders: any = null;
    ngOnInit() {
        this.listorders = null;
        this.http.get("http://127.0.0.1:3000/api/ordersall").subscribe(data => {
            if (data) {
                this.listorders = data;
            }
        })
    }
    addcart(newest) {
        if (newest) {
            if (this.listorders && this.listorders.length > 0) {
                let temp = this.listorders.filter(a => a.product_id === newest.product_id);
                if (temp && temp.length > 0) {
                    temp[0].orders_qty = temp[0].orders_qty + 1;
                    temp[0].orders_amount = temp[0].orders_amount + newest.product_price;
                    this.http.put("http://127.0.0.1:3000/api/updateorders/" + temp[0].orders_id, temp[0]).subscribe(data => {
                        if (data) {
                            this.http.get("http://127.0.0.1:3000/api/ordersall").subscribe(data => {
                                if (data) {
                                    this.listorders = data;
                                    console.log("listorders", this.listorders)
                                    window.location.reload();
                                }
                            })
                        }
                    })
                }
                else {
                    var temps = {
                        product_id: newest.product_id,
                        orders_qty: 1,
                        orders_amount: newest.product_price,
                        orders_status: 0,
                        transaction_id: null,
                    }
                    this.http.post("http://127.0.0.1:3000/api/addorders", temps).subscribe(data => {
                        if (data) {
                            this.http.get("http://127.0.0.1:3000/api/ordersall").subscribe(data => {
                                if (data) {
                                    this.listorders = data;
                                    console.log("listorders add", this.listorders)
                                    window.location.reload();
                                }
                            })
                        }
                    })
                }
            }
            else {
                var temps = {
                    product_id: newest.product_id,
                    orders_qty: 1,
                    orders_amount: newest.product_price,
                    orders_status: 0,
                    transaction_id: null,
                }
                this.http.post("http://127.0.0.1:3000/api/addorders", temps).subscribe(data => {
                    if (data) {
                        this.http.get("http://127.0.0.1:3000/api/ordersall").subscribe(data => {
                            if (data) {
                                this.listorders = data;
                                console.log("listorders add", this.listorders)
                                window.location.reload();
                            }
                        })
                    }
                })
            }
        }

    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}