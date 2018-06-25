import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { AppApi } from '../../app.api';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs/Subscriber';
@Component({
    selector: "home-page",
    templateUrl: "HomePage.component.html",

    providers: [AppApi]
})

export class HomePageComponent implements OnInit {
    AppApi: AppApi = new AppApi();
    _Categories = this.AppApi.Categories;
    _newest: any = null;
    _buyest: any = null;
    _viewest: any = null;
    phones: any = [];
    constructor(private routing: Router, private http: HttpClient) {
    }
    ngOnInit() {
        this.http.get("http://127.0.0.1:3000/api/productlatest").subscribe(data => {
            if (data) {
                this._newest = data;
                console.log("lcompany", this._newest);
            }
        });
        this.http.get("http://127.0.0.1:3000/api/productdbestsell").subscribe(data => {
            if (data) {
                this._buyest = data;
                console.log("lcompany", this._buyest);
            }
        });
        this.http.get("http://127.0.0.1:3000/api/productmostview").subscribe(data => {
            if (data) {
                this._viewest = data;
                console.log("lcompany", this._viewest);
            }
        });
    }
}