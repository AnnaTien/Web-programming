import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Parser } from '@angular/compiler/src/ml_parser/parser';
import { Alert } from 'selenium-webdriver';
import { Location } from '@angular/common';
@Component({
    selector: "eportal-header",
    templateUrl: "./Header.component.html",
})

export class HeaderComponent {
    lcatalog: any = null;
    lcompany: any = null;
    @ViewChild('Loginform') Loginmodal;
    @ViewChild('registered') registered;
    public loginForm: FormGroup;
    public registerForm: FormGroup;
    constructor(private http: HttpClient, public fb: FormBuilder, private location: Location) {
        this.loginForm = this.fb.group({
            'email': new FormControl(null, Validators.required),
            'password': new FormControl(null, Validators.required),
        });
        this.registerForm = this.fb.group({
            name: new FormControl(null, Validators.required),
            username: new FormControl(null, Validators.required),
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required),
            phone: new FormControl(null, [Validators.required, Validators.pattern(new RegExp('^[0-9]+$'))]),
        })
    }
    iconsSelect: Array<any>;
    listorders: any = null;
    qty: number = 0;
    Userinfor: any = null;
    ngOnInit() {
        var a = document.cookie.split("=")[1];
        if (a) {
            this.Userinfor = JSON.parse((document.cookie).split("=")[1]);
            this.islogin = true;
        }
        else {
            this.islogin = false;
            this.Userinfor = null;
        }


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
    islogin = false;
    Account: any = null;
    datalogin: any = null;
    public submitlogin(value) {
        this.datalogin = null;
        console.log("value", value);
        this.http.post("http://127.0.0.1:3000/api/login", value).subscribe(datas => {
            console.log("datalogin1", datas);
            this.datalogin = datas;
            if (this.datalogin.Data === -1) {
                this.Userinfor = null;
                alert("Tên đăng nhập và mật khẩu không đúng");
                this.datalogin = null;
            }
            else {
                this.Loginmodal.hide();
                this.Account = this.datalogin.account;
                this.islogin = true;
                document.cookie = `UserLogin=${JSON.stringify(this.Account)};`
                if (this.Account.Role == 1) {
                    window.location.href = "http://localhost:4200/#/admin"
                }
                else {
                    if (window.location.hash != "#/cart") {
                        window.location.href = "http://localhost:4200/#/setting";
                    }
                }
                window.location.reload();
            }
        });
    }
    register: any = null;
    submitregister(value) {
        this.http.post("http://127.0.0.1:3000/api/register", value).subscribe(data => {
            if (data) {
                this.register = data;
                if (this.register.Data === -1) {
                    alert("Đăng kí thất bại");
                }

                else {
                    this.registered.hide();
                    alert("Đăng kí tài khoản thành công")
                    this.Loginmodal.show();

                }
            }

        });
    }
    LogOut() {
        this.Userinfor = null;
        this.islogin = false;
        this.Account = null;
        document.cookie = `UserLogin=`;
        if (window.location.hash === "#/setting" || window.location.hash === "#/admin") {
            window.location.href = "http://localhost:4200/#/homepage";
        }
        console.log(this.location);
        window.location.reload();
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
