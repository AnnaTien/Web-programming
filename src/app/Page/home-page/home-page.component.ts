import { Component, OnInit, Injectable } from '@angular/core';
import {NgForOf, CurrencyPipe} from '@angular/common'
import { Supplier, Products, Type } from '../models/dataSample';
import { Router } from '@angular/router';

@Injectable()

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  LstProduct: any = Products;
  LstSupplier: any = Supplier;
  LstType: any = Type;

  LstBestSell_1: any = [];
  LstBestSell_2: any = [];
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.LstBestSell_1 = this.LstProduct.filter(p =>p.ID >= 1 && p.ID < 6);
    this.LstBestSell_2 = this.LstProduct.filter(p =>p.ID > 5 && p.ID <= 10);
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
