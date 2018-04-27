import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppApi } from '../../models/dataSample';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss'],
  providers: [AppApi]
})
export class SupplierComponent implements OnInit {

  LstSupplier: any = [];
  pageSize: any = 10;
  numPage: any = 1; 
  pageNumber: any  = 1;
  constructor(private router: Router, private _data: AppApi ) { }

  ngOnInit() {
    let num  = this._data.Categories[0].Suppliers.length / this.pageSize ;
    if(this._data.Categories[0].Suppliers.length - (num * this.pageSize) > 0 )
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
    this.LstSupplier = this._data.Categories[0].Suppliers.filter(dt => 
      dt.SuppliersID >= ((this.pageNumber-1)*this.pageSize) + 1 
      && dt.SuppliersID <= ((this.pageNumber-1)*this.pageSize)+ 1 +this.pageSize
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
