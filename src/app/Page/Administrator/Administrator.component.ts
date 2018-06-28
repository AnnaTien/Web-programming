import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import { NgForOf, CurrencyPipe } from '@angular/common'
import { Router } from '@angular/router';
import { ProductsComponent } from './Products/Products.component';
import { CategoriesComponent } from './Categories/Categories.component';
import { SuppliersComponent } from './Suppliers/Suppliers.component';
import { BillsComponent } from './Bills/Bills.component';
import { AcessDeniedComponent } from '../AcessDenied/AcessDenied.component';
import { HttpClient } from '@angular/common/http';

@Injectable()
@Component({
    selector: 'app-admin',
    templateUrl: './Administrator.component.html',
    styleUrls: ['./Administrator.component.scss']
})
export class AdministratorComponent implements OnInit {
    @ViewChild(ProductsComponent) product: ProductsComponent;
    @ViewChild(CategoriesComponent) categories: CategoriesComponent;
    @ViewChild(SuppliersComponent) supplier: SuppliersComponent;
    @ViewChild(BillsComponent) bill: BillsComponent;
    CurAcctive = 1;
    Account: any = {}
    constructor(private router: Router, private http: HttpClient) {

    }

    func = {
        product: 1,
        categories: 2,
        supplier: 3,
        bill: 4
    }
    osumproduct = null;;
    sumproduct: number = 0;
    osumcatalog = null;;
    sumcatalog: number = 0;
    osumcompany = null;;
    sumcopany: number = 0;
    ngOnInit() {

        this.http.get("http://127.0.0.1:3000/api/sumproduct").subscribe(data => {
            if (data) {
                this.osumproduct = data;
                this.sumproduct = this.osumproduct.total;
                console.log("dataaaa", this.sumproduct);
            }
        });
        this.http.get("http://127.0.0.1:3000/api/companysum").subscribe(data => {
            if (data) {
                this.osumcompany = data;
                this.sumcopany = this.osumcompany.total;
            }
        });
        this.http.get("http://127.0.0.1:3000/api/catalogsum").subscribe(data => {
            if (data) {
                this.osumcatalog = data;
                this.sumcatalog = this.osumcatalog.total;
            }
        });
    }
    getCookie(name) {
        return { AccountID: 1, Role: 1 }
    }

    ViewDetail(id) {
        this.CurAcctive = id;
    }
}