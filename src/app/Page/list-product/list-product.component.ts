import { Component, OnInit } from '@angular/core';
import {  Supplier, Products, Type } from '../models/dataSample';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  LstProduct: any = Products;
  LstSupplier: any = Supplier;
  LstType: any = Type;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  ViewDetail(code, type){
    if(code){
      if(type==1)
        this.router.navigate(["phone", code]);
      else
        this.router.navigate(["pad", code]);
    }
  }

}
