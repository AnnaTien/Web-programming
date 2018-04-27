import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import {NgForOf, CurrencyPipe} from '@angular/common'
import { Router } from '@angular/router';
import { ProductsComponent } from './Products/Products.component';
import { CategoriesComponent } from './Categories/Categories.component';
import { SuppliersComponent } from './Suppliers/Suppliers.component';
import { BillsComponent } from './Bills/Bills.component';

@Injectable()
@Component({
    selector: 'app-admin',
    templateUrl: './Administrator.component.html',
    styleUrls:['./Administrator.component.scss']
})
export class AdministratorComponent implements OnInit {
    @ViewChild(ProductsComponent) product: ProductsComponent;
    @ViewChild(CategoriesComponent) categories: CategoriesComponent;
    @ViewChild(SuppliersComponent) supplier: SuppliersComponent;
    @ViewChild(BillsComponent) bill: BillsComponent;
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