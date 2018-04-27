import { Component, OnInit, ViewChild } from '@angular/core';
import { AppApi } from '../../app.api';
import { Router, ActivatedRoute, NavigationStart } from "@angular/router";

@Component({
    selector: "detail-phone",
    templateUrl: "Detailphone.component.html",
    providers: [AppApi]
})

export class DetailphoneComponent {
    AppApi: AppApi = new AppApi();
    sametype = null;
    samecompany = null;
    _Categories = this.AppApi.Categories;
    _Products = this.AppApi.Products;
    _productID: any = null;
    detailproduct: any = null;
    constructor(private appApi: AppApi,
        private activatedRoute: ActivatedRoute,
        private routing: Router) {

        //Trường hợp đổi empID ngay trên đường dẫn
        this.routing.events.subscribe(event => {
            this.sametype = null;
            this.samecompany = null;
            this._productID = Number(this.activatedRoute.snapshot.queryParams["productID"]);
            this.detailproduct = this._Products.filter(x => x.ProductID === this._productID)[0];
            if (this.detailproduct) {
                this.sametype = this._Products.filter(x => x.CategorieID === this.detailproduct.CategorieID);
                this.samecompany = this._Products.filter(x => x.SuppliersID === this.detailproduct.SuppliersID);
            }
        });

    }
}