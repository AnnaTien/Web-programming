import { Component, OnInit, Injectable } from '@angular/core';
import {NgForOf, CurrencyPipe} from '@angular/common'
import { Supplier, Products, Type, AppApi } from '../../models/dataSample';
import { Router } from '@angular/router';

@Injectable()

@Component({
  selector: 'app-admin-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [AppApi]
})
export class CategoriesComponent implements OnInit {
  LstProduct: any = [];
  LstSupplier: any = [];
  Categories: any = [];
  pageSize: any = 10;
  numPage: any = 1; 
  pageNumber: any  = 1;
  constructor(private router: Router, private _data: AppApi ) { }

  ngOnInit() {
    
    //this.Categories = this._data.Categories;
    let num  = this._data.Categories.length / this.pageSize ;
    if(this._data.Categories.length - (num * this.pageSize) > 0 )
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
    this.Categories = this._data.Categories.filter(dt => 
      dt.CategorieID >= ((this.pageNumber-1)*this.pageSize) + 1 
      && dt.CategorieID <= ((this.pageNumber-1)*this.pageSize)+ 1 +this.pageSize
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
