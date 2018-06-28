import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: "cart",
    templateUrl: "Cart.component.html"
})

export class CartComponent {
    constructor(private http: HttpClient) {

    }
    detailproduct: any = null;
    catalog: any = null;
    company: any
    listorders: any = null;
    sumqty = 0;
    sumamount = 0;
    ngOnInit() {
        this.sumqty = 0;
        this.sumamount = 0;
        this.http.get("http://127.0.0.1:3000/api/ordersall").subscribe(data => {
            if (data) {
                this.listorders = data;
                for (let item of this.listorders) {
                    if (item) {
                        this.http.get("http://127.0.0.1:3000/api/productbyid/" + item.product_id).subscribe(datas => {
                            item.data = datas;
                        });
                        this.sumqty = this.sumqty + item.orders_qty;
                        this.sumamount = this.sumamount + item.orders_amount;
                    }
                }

                console.log("datas", this.listorders);
            }
        })
    }
    deleteorders(items) {
        this.http.delete("http://127.0.0.1:3000/api/deleteorders/" + items.orders_id).subscribe(datas => {
            if (datas) {
                this.http.get("http://127.0.0.1:3000/api/ordersall").subscribe(data => {
                    if (data) {
                        this.listorders = data;
                        for (let item of this.listorders) {
                            if (item) {
                                this.http.get("http://127.0.0.1:3000/api/productbyid/" + item.product_id).subscribe(datas => {
                                    item.data = datas;
                                });
                                this.sumqty = this.sumqty + item.orders_qty;
                                this.sumamount = this.sumamount + item.orders_amount;
                            }
                        }
                        console.log("datas", this.listorders);
                    }
                })
                window.location.reload();
            }
        })
    }
}