import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-bills',
  templateUrl: './Bills.component.html',
  //styleUrls: ['./Bills.component.scss']
})
export class BillsComponent implements OnInit {
  Bills: any = [
    {
      "ID":1,
      "GuessName": "Hoàng Phượng Thiên",
        "Products": [{
          
        }],
        "IDProduct": 2,
        "ProductName":"iPhone X 64GB",
        "Qty":1,
        "Price":"27.990.000₫"
    }
  ]
  constructor() { }

  ngOnInit() {

  }

}
