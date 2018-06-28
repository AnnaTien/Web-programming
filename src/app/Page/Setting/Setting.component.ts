import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'setting',
  templateUrl: './Setting.component.html',
  //styleUrls: ['./Bills.component.scss']
})
export class SettingComponent implements OnInit {
  public settingForm: FormGroup;
  listtransacsion: any = null;
  constructor(private http: HttpClient, public fb: FormBuilder) {
    this.settingForm = this.fb.group({
      name: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      phone: new FormControl(null, [Validators.required, Validators.pattern(new RegExp('^[0-9]+$'))]),
    })
  }
  Userinfor: any = null;
  ngOnInit() {
    var a = document.cookie.split("=")[1];
    if (a) {
      this.Userinfor = JSON.parse((document.cookie).split("=")[1]);
      console.log("Userinfor", this.Userinfor.username);
      this.settingForm.patchValue({ name: this.Userinfor.name });
      this.settingForm.patchValue({ username: this.Userinfor.username });
      this.settingForm.patchValue({ email: this.Userinfor.email });
      this.settingForm.patchValue({ phone: this.Userinfor.phone });
    }
    else {
      this.Userinfor = null;
    }

  }
  submitsetting(value) {
    value.user_id = this.Userinfor.user_id;
    this.http.put("http://127.0.0.1:3000/api/changeinfor/" + value.user_id, value).subscribe(data => {
      if (data) {
        this.http.get("http://127.0.0.1:3000/api/userbyid/" + value.user_id).subscribe(datas => {
          if (datas) {
            this.Userinfor = datas;
            if (this.Userinfor) {
              this.settingForm.patchValue({ name: this.Userinfor.name });
              this.settingForm.patchValue({ username: this.Userinfor.username });
              this.settingForm.patchValue({ email: this.Userinfor.email });
              this.settingForm.patchValue({ phone: this.Userinfor.phone });
              window.location.reload();
            }
          }
        })
      }
    });
  }

}
