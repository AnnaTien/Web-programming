import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Inject } from '@angular/core';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
const createFormGroup = dataItem => new FormGroup({
  "transaction_id": new FormControl(dataItem.transaction_id),
  "status": new FormControl(dataItem.status, Validators.required),
  "user_id": new FormControl(dataItem.user_id, Validators.required),
  "user_name": new FormControl(dataItem.user_name, Validators.required),
  "user_email": new FormControl(dataItem.user_email),
  "user_phone": new FormControl(dataItem.user_phone),
  "amount": new FormControl(dataItem.amount),
  "adress": new FormControl(dataItem.adress),
  "created": new FormControl(dataItem.created),
});

@Component({
  selector: 'app-admin-bills',
  templateUrl: './Bills.component.html',
})
export class BillsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  listtransacsion: any = null;
  public formGroup: FormGroup;
  private editedRowIndex: number;
  ngOnInit() {
    this.http.get("http://127.0.0.1:3000/api/transactionall").subscribe(datas => {
      if (datas) {
        this.listtransacsion = datas;
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

  public addHandler({ sender }) {
    this.closeEditor(sender);

    this.formGroup = new FormGroup({
      "transaction_id": new FormControl(),
      "status": new FormControl('', Validators.required),
      "user_id": new FormControl('', Validators.required),
      "user_name": new FormControl('', Validators.required),
      "user_email": new FormControl(),
      "user_phone": new FormControl(),
      "amount": new FormControl(),
      "adress": new FormControl(),
      "created": new FormControl(),
    });
    sender.addRow(this.formGroup);
  }

  public editHandler({ sender, rowIndex, dataItem }) {
    this.closeEditor(sender);

    this.formGroup = createFormGroup(dataItem);

    this.editedRowIndex = rowIndex;

    sender.editRow(rowIndex, this.formGroup);
  } public cancelHandler({ sender, rowIndex }) {
    this.closeEditor(sender, rowIndex);
  }

  public saveHandler({ sender, rowIndex, formGroup, isNew }): void {
    const product = formGroup.value;
    this.http.put("http://127.0.0.1:3000/api/updatetransaction/" + product.product_id, product).subscribe(data => {
      this.http.get("http://127.0.0.1:3000/api/transactionall").subscribe(data => {
        this.listtransacsion = data;
      });
    });

    sender.closeRow(rowIndex);
  }

  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);
    this.editedRowIndex = undefined;
    this.formGroup = undefined;
  }
}
