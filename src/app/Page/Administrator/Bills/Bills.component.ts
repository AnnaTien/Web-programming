import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Inject } from '@angular/core';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-bills',
  templateUrl: './Bills.component.html',
})
export class BillsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  listtransacsion: any = null;
  liststatus: any = null;
  public formGroup: FormGroup;
  private editedRowIndex: number;
  ngOnInit() {
    this.http.get("http://127.0.0.1:3000/api/transactionall").subscribe(datas => {
      if (datas) {
        this.listtransacsion = datas;
      }
    });
    this.http.get("http://127.0.0.1:3000/api/statussall").subscribe(datas => {
      if (datas) {
        this.liststatus = datas;
      }
    });
  }
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };

  public onStateChange(state: State) {
    this.gridState = state;
  }
  satusde = 101;
  Update(dataItem) {
    dataItem.status = this.satusde;
    this.http.put("http://127.0.0.1:3000/api/updatetransaction/" + dataItem.transaction_id, dataItem).subscribe(data => {
      this.http.get("http://127.0.0.1:3000/api/transactionall").subscribe(data => {
        this.listtransacsion = data;
      });
    });
  }
  handleCategoryChange(e) {
    this.satusde = e;
  }
}
