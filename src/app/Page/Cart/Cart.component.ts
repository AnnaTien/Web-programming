import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: "cart",
    templateUrl: "Cart.component.html"
})

export class CartComponent {
    ispay = false;
    iscart = true;
    islogin = true;

    contactForm: FormGroup;
    constructor(private http: HttpClient, private fb: FormBuilder) {
        this.contactForm = fb.group({
            user_name: new FormControl(['', Validators.required]),
            user_email: new FormControl(['', [Validators.required, Validators.email]]),
            user_phone: new FormControl(['', Validators.required, Validators.call]),
            adress: new FormControl([null, Validators.required])
        });
    }
    detailproduct: any = null;
    catalog: any = null;
    company: any
    listorders: any = null;
    sumqty = 0;
    sumamount = 0;
    tsumqty = null;;
    tsumamount = null;
    Userinfor: any = null;
    ngOnInit() {
        var a = document.cookie.split("=")[1];
        if (a) {
            this.Userinfor = JSON.parse((document.cookie).split("=")[1]);
            this.islogin = true;
            this.contactForm.patchValue({ user_name: this.Userinfor.name });
            this.contactForm.patchValue({ user_email: this.Userinfor.email });
            this.contactForm.patchValue({ user_phone: this.Userinfor.phone });
            this.contactForm.patchValue({ adress: null });
        }
        else {
            this.islogin = false;
            this.Userinfor = null;
        }
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
                    }
                }
            }
        })

        this.http.get("http://127.0.0.1:3000/api/sumamount").subscribe(data => {
            if (data) {
                this.tsumamount = data;
                this.sumamount = this.tsumamount.totalamount;
            }
        });
        this.http.get("http://127.0.0.1:3000/api/sumorderqty").subscribe(data => {
            if (data) {
                this.tsumqty = data;
                this.sumqty = this.tsumqty.totalqty;
            }
        });
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
                            }
                        }
                    }
                })
                window.location.reload();
            }
        })
    }
    buy() {
        if (this.Userinfor) {
            this.iscart = !this.iscart;
        }
        else {
            alert("Bạn phải đăng nhập trước khi tiến thành  đặt hàng");
        }
    }
    edit() {
        this.iscart = !this.iscart;
    }
    submitcontact(value) {
        value.amount = this.sumamount;
        value.user_id = this.Userinfor.user_id;
        this.http.post("http://127.0.0.1:3000/api/addtransaction", value).subscribe(data => {
            if (data) {
                alert("Đặt hàng thành công");
                window.location.reload();
            }
        });
    }
}