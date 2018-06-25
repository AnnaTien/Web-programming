import { Component, OnInit, ViewChild } from '@angular/core';
import { AppApi } from '../../app.api';
import { Router, ActivatedRoute, NavigationStart } from "@angular/router";

@Component({
    selector: "show-phone",
    templateUrl: "Showphone.component.html",
    providers: [AppApi]
})

export class ShowphoneComponent {
    AppApi: AppApi = new AppApi();
    _Categories = this.AppApi.Categories;
    _Products = this.AppApi.Products;
    _CategorieID: any = null;
    listproduct: any = null;
    _SuppliersID: any = null;
    _Suppliers: any = null;
    constructor(private appApi: AppApi,
        private activatedRoute: ActivatedRoute,
        private routing: Router) {

        //Trường hợp đổi empID ngay trên đường dẫn
        this.routing.events.subscribe(event => {
            this.listproduct = null;
            this._CategorieID = null;
            this._SuppliersID = null;
            this._CategorieID = Number(this.activatedRoute.snapshot.queryParams["catalog_id"]);
            if (this._CategorieID) {
                this.listproduct = this._Products.filter(x => x.CategorieID === this._CategorieID);
            }
            this._SuppliersID = Number(this.activatedRoute.snapshot.queryParams["company_id"]);
            if (this._SuppliersID) {
                this.listproduct = this._Products.filter(x => x.SuppliersID === this._SuppliersID);
            }
        })

    }
}