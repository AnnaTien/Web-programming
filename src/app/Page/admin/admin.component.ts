import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import {NgForOf, CurrencyPipe} from '@angular/common'
import { Supplier, Products, Type } from '../models/dataSample';
import { Router } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CategoriesComponent } from './categories/categories.component';
import { SupplierComponent } from './supplier/supplier.component';
import { BillManagerComponent } from './bill-manager/bill-manager.component';

@Injectable()
@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls:['./admin.component.scss']
})
export class AdminComponent implements OnInit {
    @ViewChild(ProductComponent) product: ProductComponent;
    @ViewChild(CategoriesComponent) categories: CategoriesComponent;
    @ViewChild(SupplierComponent) supplier: SupplierComponent;
    @ViewChild(BillManagerComponent) bill: BillManagerComponent;
    CurAcctive = 1;
    constructor(){

    }

    func = {
        product: 1,
        categories: 2,
        supplier: 3,
        bill: 4
    }
    ngOnInit(){

    }
    ViewDetail(id){
        this.CurAcctive = id;
    }
}