import { Component, OnInit, Injectable } from '@angular/core';
import {NgForOf, CurrencyPipe} from '@angular/common'
import { ListPhone, ListPad, Supplier } from '../models/dataSample';

@Injectable()

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  dataSample: any = {};
  LstPhone: any = ListPhone;
  LstPad : any = ListPad;
  LstSupplier: any = Supplier
  lstPhoneBestSell_1: any = [];
  lstPhoneBestSell_2: any = [];
  constructor() { }

  ngOnInit() {
    this.lstPhoneBestSell_1 = this.LstPhone.filter(p =>p.ID >= 1 && p.ID <= 6);
    this.lstPhoneBestSell_2 = this.LstPhone.filter(p =>p.ID >= 5 && p.ID <= 10);
  }

}
