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
    ngOnInit() {

    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}