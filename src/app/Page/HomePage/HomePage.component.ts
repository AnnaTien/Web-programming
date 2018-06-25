import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { AppApi } from '../../app.api';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs/Subscriber';
import { CarouselComponent } from '../../typescripts/free';
@Component({
    selector: "home-page",
    templateUrl: "HomePage.component.html",

    providers: [AppApi]
})

export class HomePageComponent implements OnInit {
    AppApi: AppApi = new AppApi();
    _Categories = this.AppApi.Categories;
    _newest: any = null;
    _buyest: any = null;
    _viewest: any = null;
    phones: any = [];
    constructor(private routing: Router, private http: HttpClient) {
    }
    @ViewChild('carousel1') carousel1: CarouselComponent;
    @ViewChild('carousel2') carousel2: CarouselComponent;
    @ViewChild('carousel3') carousel3: CarouselComponent;
    public doctors: any = [];
    ngOnInit() {
        this.carousel1.interval = 0;
        this.carousel2.interval = 0;
        this.carousel3.interval = 0;
        let pageSize = 4;
        this.http.get("http://127.0.0.1:3000/api/productlatest").subscribe(data => {
            if (data) {
                this._newest = data;
                console.log("lcompany", this._newest);
            }
        });
        this.http.get("http://127.0.0.1:3000/api/productdbestsell").subscribe(data => {
            if (data) {
                this._buyest = data;
                console.log("lcompany", this._buyest);
                let doctor: any = [];
                if (this._buyest.length > pageSize) {
                    for (var i = 0; i < pageSize; i++) {
                        this._buyest.push(data[i]);
                    }
                    for (var i = 0; i < this._buyest.length - pageSize; i++) {
                        for (var j = i; j < i + pageSize; j++) {
                            doctor.push(this._buyest[j]);
                        }
                        this.doctors.push(doctor);
                        doctor = [];
                    }
                }
                else {
                    this._buyest.forEach((obj) => {
                        doctor.push(obj);
                    });
                    this.doctors.push(doctor);
                }
                console.log("doctors", this.doctors);
            }
        });
        this.http.get("http://127.0.0.1:3000/api/productmostview").subscribe(data => {
            if (data) {
                this._viewest = data;
                console.log("lcompany", this._viewest);
            }
        });
    }
    Basic1 = false;
    Basic2 = false;
    Basic3 = false;
    Basicfn1() {
        this.Basic1 = !this.Basic1;
        if (!this.Basic1) {
            this.Basic2 = true;
            this.Basic3 = true;
        }
    }
    Basicfn2() {
        this.Basic2 = !this.Basic2;
        if (!this.Basic2) {
            this.Basic1 = true;
            this.Basic3 = true;
        }
    }
    Basicfn3() {
        this.Basic3 = !this.Basic3;
        if (!this.Basic3) {
            this.Basic1 = true;
            this.Basic2 = true;
        }
    }
    previous1() {
        this.carousel1.previousSlide();

    }
    next1() {
        this.carousel1.nextSlide();
    }
    previous2() {
        this.carousel2.previousSlide();

    }
    next2() {
        this.carousel2.nextSlide();
    }
    previous3() {
        this.carousel3.previousSlide();

    }
    next3() {
        this.carousel3.nextSlide();
    }

}