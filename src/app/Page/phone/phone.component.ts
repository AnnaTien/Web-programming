import { Component, OnInit, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Supplier, Products } from '../models/dataSample';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {
  LstProduct: any = Products
  phoneCode: any;
  Phone: any = {};
  LstSupplier: any = Supplier;
  LstType: any = Type;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.phoneCode = !this.route.params["_value"]["phonecode"]?'':this.route.params["_value"]["phonecode"]
    this.Phone = this.LstProduct.filter(rec=> rec.Code == this.phoneCode)[0];
    console.log(this.Phone);
  }

}
