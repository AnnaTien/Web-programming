import { Component, OnInit, Injectable } from '@angular/core';
import {NgForOf, CurrencyPipe} from '@angular/common'
import { Supplier, Products, Type } from '../../models/dataSample';
import { Router } from '@angular/router';

@Injectable()

@Component({
  selector: 'app-admin-typeproduct',
  templateUrl: './typeproduct.component.html',
  styleUrls: ['./typeproduct.component.scss']
})
export class TypeProductComponent implements OnInit {
  LstProduct: any = Products;
  LstSupplier: any = Supplier;
  LstType: any = Type;
  
  constructor(private router: Router) { }

  ngOnInit() {}

}
