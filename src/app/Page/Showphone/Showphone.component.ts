import { Component, OnInit, ViewChild } from '@angular/core';
import { AppApi } from '../../app.api';
import { Router, ActivatedRoute, NavigationStart } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
    selector: "show-phone",
    templateUrl: "Showphone.component.html",
    providers: [AppApi]
})

export class ShowphoneComponent implements OnInit {
    listproduct: any = null;
    catalogid: any = null;
    companyid: any = null;
    sub: any = null;
    constructor(private appApi: AppApi,
        private activatedRoute: ActivatedRoute,
        private routing: Router, private http: HttpClient) {

        //Trường hợp đổi empID ngay trên đường dẫn
        this.sub = this.activatedRoute.queryParams.subscribe(params => {
            this.catalogid = null;
            this.companyid = null;
            this.listproduct = null;
            if (params.catalog_id) {
                this.catalogid = params.catalog_id;
                this.http.get("http://127.0.0.1:3000/api/productcatalog/" + this.catalogid).subscribe(data => {
                    this.listproduct = data;
                    console.log("data11", this.listproduct);
                });
            }
            if (params.company_id) {
                this.companyid = params.company_id;
                this.http.get("http://127.0.0.1:3000/api/productcompany/" + this.companyid).subscribe(data => {
                    this.listproduct = data;
                    console.log("data11", this.listproduct);
                });
            }
            console.log(this.catalogid, this.companyid);
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