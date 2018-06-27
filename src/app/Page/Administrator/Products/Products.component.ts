import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Inject } from '@angular/core';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
const createFormGroup = dataItem => new FormGroup({
  "product_id": new FormControl(dataItem.product_id),
  "product_name": new FormControl(dataItem.product_name, Validators.required),
  "catalog_id": new FormControl(dataItem.catalog_id, Validators.required),
  "company_id": new FormControl(dataItem.company_id, Validators.required),
  "product_created": new FormControl(dataItem.product_created),
  "product_price": new FormControl(dataItem.product_price),
  "product_image_link": new FormControl(dataItem.product_image_link),
  "product_image_list": new FormControl(dataItem.product_image_list),
  "product_discount": new FormControl(dataItem.product_discount),
  "product_view": new FormControl(dataItem.product_view),
  "product_pay": new FormControl(dataItem.product_pay),
  "product_qty": new FormControl(dataItem.product_qty),
  "product_madein": new FormControl(dataItem.product_madein),
});
@Component({
  selector: 'app-admin-products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.scss']
})

export class ProductsComponent {
  constructor(private http: HttpClient) { }
  listproduct: any = null;
  public formGroup: FormGroup;
  private editedRowIndex: number;
  public categories: any = null;
  public allowCustom: boolean = true;
  listcompany: any = null;
  ngOnInit() {
    this.http.get("http://127.0.0.1:3000/api/productall").subscribe(data => {
      this.listproduct = data;
      console.log("productall", this.listproduct);
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
  public category(id: number): any {
    return this.categories.find(x => x.catalog_id === id);
  }

  public onStateChange(state: State) {
    this.gridState = state;
  }

  public addHandler({ sender }) {
    this.closeEditor(sender);

    this.formGroup = new FormGroup({
      "product_id": new FormControl(),
      "product_name": new FormControl('', Validators.required),
      "catalog_id": new FormControl('', Validators.required),
      "company_id": new FormControl('', Validators.required),
      "product_created": new FormControl(),
      "product_price": new FormControl(),
      "product_image_link": new FormControl(),
      "product_image_list": new FormControl(),
      "product_discount": new FormControl(),
      "product_view": new FormControl(),
      "product_pay": new FormControl(),
      "product_qty": new FormControl(),
      "product_madein": new FormControl(),
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
    if (isNew) {
      this.http.post("http://127.0.0.1:3000/api/addproduct", product).subscribe(data => {
        this.http.get("http://127.0.0.1:3000/api/productall").subscribe(data => {
          this.listproduct = data;
        });
      })
    }
    else {
      this.http.put("http://127.0.0.1:3000/api/updateproduct/" + product.product_id, product).subscribe(data => {
        this.http.get("http://127.0.0.1:3000/api/productall").subscribe(data => {
          this.listproduct = data;
        });
      })
    }

    sender.closeRow(rowIndex);
  }

  public removeHandler({ dataItem }): void {
    this.http.delete("http://127.0.0.1:3000/api/deleteproduct/" + dataItem.product_id).subscribe(data => {
      this.http.get("http://127.0.0.1:3000/api/productall").subscribe(data => {
        this.listproduct = data;
      });
    })
  }

  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);
    this.editedRowIndex = undefined;
    this.formGroup = undefined;
  }
}
