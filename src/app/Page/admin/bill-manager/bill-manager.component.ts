import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-manager',
  templateUrl: './bill-manager.component.html',
  styleUrls: ['./bill-manager.component.scss']
})
export class BillManagerComponent implements OnInit {
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
