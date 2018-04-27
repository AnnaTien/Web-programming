import { Component, OnInit, Injectable } from '@angular/core';
import {NgForOf, CurrencyPipe} from '@angular/common'
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { AppApi } from '../../../app.api';

@Injectable()

@Component({
  selector: 'app-admin-products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.scss'],
  providers : [AppApi]
})
export class ProductsComponent implements OnInit {
  LstProduct: any = [];
  LstSupplier: any = [];
  Categories: any = [];
  pageSize: any = 10;
  numPage: any = 1; 
  pageNumber: any  = 1;
  constructor(private router: Router, private _data: AppApi ) { }

  ngOnInit() {
    
    this.Categories = this._data.Categories;
    let num  = this._data.Products.length / this.pageSize ;
    if(this._data.Products.length - (num * this.pageSize) > 0 )
      this.numPage = num + 1;
    else 
      this.numPage = num;
    this.LoadData(this.pageNumber);
  }

  LoadData(pageNumber){
    if (!pageNumber)
      pageNumber = this.pageNumber;
    else if (pageNumber <= this.numPage && pageNumber > 0)
      this.pageNumber = pageNumber
    this.LstProduct = this._data.Products.filter(dt => 
      dt.ProductID >= ((this.pageNumber-1)*this.pageSize) + 1 
      && dt.ProductID <= ((this.pageNumber-1)*this.pageSize)+ 1 +this.pageSize
    );
  }

  CreateRange(){
    var items: number[] = [];
    for(var i = 1; i <= this.numPage; i++){
       items.push(i);
    }
    return items;
  }
}
