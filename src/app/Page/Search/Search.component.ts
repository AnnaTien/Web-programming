import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { State, process } from '@progress/kendo-data-query';

@Component({
  selector: 'search',
  templateUrl: './Search.component.html',
  //styleUrls: ['./Bills.component.scss']
})
export class SearchComponent implements OnInit {

  listcompany: any = null;
  categories: any = null;
  listproduct: any = null;
  productname: string = "iphone";
  catalog_id = 1;
  company_id = 1;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("http://127.0.0.1:3000/api/productall").subscribe(data => {
      this.listproduct = data;
    });
    this.http.get("http://127.0.0.1:3000/api/catalogall").subscribe(data => {
      this.categories = data;
      console.log("catalogall", this.categories);
    });
    this.http.get("http://127.0.0.1:3000/api/companyall").subscribe(data => {
      this.listcompany = data;
      console.log("listcompany", this.listcompany);
    });
  }
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };
  searchproduct() {
    this.http.post("http://127.0.0.1:3000/api/searchproduct", { product_name: this.productname, catalog_id: this.catalog_id, company_id: this.company_id }).subscribe(data => {
      this.listproduct = data;
      console.log("data")

    })
  }
  coverage() {
    this.http.post("http://127.0.0.1:3000/api/searchproduct", { product_name: this.productname, catalog_id: this.catalog_id, company_id: this.company_id }).subscribe(data => {
      this.listproduct = data;
    });
  }
}
