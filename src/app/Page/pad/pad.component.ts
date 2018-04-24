import { Component, OnInit } from '@angular/core';
import { ListPhone, ListPad, Supplier } from '../models/dataSample';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pad',
  templateUrl: './pad.component.html',
  styleUrls: ['./pad.component.scss']
})
export class PadComponent implements OnInit {

  phoneCode: any;
  Phone: any = {};
  LstPhone: any = ListPhone;
  LstPad : any = ListPad;
  LstSupplier: any = Supplier
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.phoneCode = !this.route.params["_value"]["padcode"]?'':this.route.params["_value"]["padcode"]
    this.Phone = this.LstPhone.filter(rec=> rec.Code == this.phoneCode)[0];
    console.log(this.Phone);
  }

}
