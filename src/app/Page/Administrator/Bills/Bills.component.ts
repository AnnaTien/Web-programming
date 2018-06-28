import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-bills',
  templateUrl: './Bills.component.html',
})
export class BillsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  listtransacsion: any = null;
  ngOnInit() {
    this.http.get("http://127.0.0.1:3000/api/transactionall").subscribe(datas => {
      if (datas) {
        this.listtransacsion = datas;
      }
    });
  }

}
