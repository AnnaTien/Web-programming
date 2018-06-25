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
    _newest = this.AppApi.Products;
    _buyest = this.AppApi.Products;
    _viewest = this.AppApi.Products;
    phones: any = [];
    constructor(private routing: Router, private http: HttpClient) {
    }
    ngOnInit() {

    }
}