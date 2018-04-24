import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListPhone, ListPad, Supplier } from '../models/dataSample';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {
  phoneCode: any;
  Phone: any = {};
  LstPhone: any = ListPhone;
  LstPad : any = ListPad;
  LstSupplier: any = Supplier
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.phoneCode = !this.route.params["_value"]["phonecode"]?'':this.route.params["_value"]["phonecode"]
    this.Phone = this.LstPhone.filter(rec=> rec.Code == this.phoneCode)[0];
    console.log(this.Phone);
  }

}
