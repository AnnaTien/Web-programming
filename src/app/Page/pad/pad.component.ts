import { Component, OnInit } from '@angular/core';
import { Supplier, Products, Type } from '../models/dataSample';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pad',
  templateUrl: './pad.component.html',
  styleUrls: ['./pad.component.scss']
})
export class PadComponent implements OnInit {
  LstProduct: any = Products;
  padcode: any;
  Pad: any = {};
  LstSupplier: any = Supplier;
  LstType: any = Type;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.padcode = !this.route.params["_value"]["padcode"]?'':this.route.params["_value"]["padcode"]
    this.Pad = this.LstProduct.filter(rec=> rec.Code == this.padcode)[0];
    console.log(this.Pad);
  }

}
