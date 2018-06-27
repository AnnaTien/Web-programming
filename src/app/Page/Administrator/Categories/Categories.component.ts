import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { HttpClient } from '@angular/common/http';
const createFormGroup = dataItem => new FormGroup({
  "catalog_id": new FormControl(dataItem.catalog_id),
  "catalog_name": new FormControl(dataItem.catalog_name, Validators.required),
});

@Component({
  selector: 'app-admin-categories',
  templateUrl: './Categories.component.html',
  styleUrls: ['./Categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  constructor(private http: HttpClient) { }
  listcatalog: any = null;
  public formGroup: FormGroup;
  private editedRowIndex: number;
  ngOnInit() {
    this.http.get("http://127.0.0.1:3000/api/catalogall").subscribe(data => {
      this.listcatalog = data;
      console.log("catalogall", this.listcatalog);
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
      "catalog_id": new FormControl(),
      "catalog_name": new FormControl('', Validators.required),
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
    console.log("product", product);
    if (isNew) {
      this.http.post("http://127.0.0.1:3000/api/addcatalog", product).subscribe(data => {
        console.log('addcatalog', data);
        this.http.get("http://127.0.0.1:3000/api/catalogall").subscribe(data => {
          this.listcatalog = data;
          console.log("catalogall", this.listcatalog);
        });
      })
    }
    else {
      this.http.put("http://127.0.0.1:3000/api/updatecatalog/" + product.catalog_id, product).subscribe(data => {

        console.log('updatecatalog', data);
        this.http.get("http://127.0.0.1:3000/api/catalogall").subscribe(data => {
          this.listcatalog = data;
          console.log("catalogall", this.listcatalog);
        });
      })
    }

    sender.closeRow(rowIndex);
  }

  public removeHandler({ dataItem }): void {
    console.log("aaa")
    this.http.delete("http://127.0.0.1:3000/api/deletecatalog/" + dataItem.catalog_id).subscribe(data => {
      console.log("data", data);
      this.http.get("http://127.0.0.1:3000/api/catalogall").subscribe(data => {
        this.listcatalog = data;
        console.log("catalogall", this.listcatalog);
      });
    })
  }

  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);
    this.editedRowIndex = undefined;
    this.formGroup = undefined;
  }
}
