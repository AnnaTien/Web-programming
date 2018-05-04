import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import {NgForOf, CurrencyPipe} from '@angular/common'
import { Router } from '@angular/router';
import { ProductsComponent } from './Products/Products.component';
import { CategoriesComponent } from './Categories/Categories.component';
import { SuppliersComponent } from './Suppliers/Suppliers.component';
import { BillsComponent } from './Bills/Bills.component';
import { AcessDeniedComponent } from '../AcessDenied/AcessDenied.component';

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
    Account: any = {}
    constructor(private router: Router){
        this.Account = this.getCookie('AccountID');
        if(this.Account.Role != 1)
        this.router.navigate(["/", 'acessdenied']);
    }

    func = {
        product: 1,
        categories: 2,
        supplier: 3,
        bill: 4
    }
    ngOnInit(){

    }
    getCookie(name){
        return {AccountID:1, Role:1}
    }

    ViewDetail(id){
        this.CurAcctive = id;
    }
}