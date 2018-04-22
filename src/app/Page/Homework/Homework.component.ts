import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Component({
    selector: 'app-homework',
    templateUrl: 'Homework.component.html'
})

export class HomeworkComponent {
    columns: number;
    rows: number;
    homework: boolean;
    arraycolumns: any = [];
    arrayrows: any = [];
    constructor(private routing: Router) {
        this.columns = 10;
        this.rows = 10;
        this.homework = true;
    }
    changehw1() {
        this.homework = true;
    }
    changehw2() {
        this.arrayrows = [];
        this.arraycolumns = [];
        this.homework = false;
        if (this.columns > 0) {
            for (let i = 1; i <= this.columns; i++) {
                this.arraycolumns.push(i);
            }
        }       
        if (this.rows > 0) {
            for (let j = 1; j <= this.rows; j++) {
                this.arrayrows.push(j);
            }

        }       

    }
    valuechangecolumns(event) {
        this.arraycolumns = [];
        if (this.columns > 0) {
            for (let i = 1; i <= this.columns; i++) {
                this.arraycolumns.push(i);
            }
        }
        else {
            alert('Số cột phải lớn hơn 0');
            this.arraycolumns = [];
            this.columns = 10;
            for (let i = 1; i <= this.columns; i++) {
                this.arraycolumns.push(i);
            }
        }
    }
    valuechangerows(event) {
        this.arrayrows = [];
        if (this.rows > 0) {
            for (let j = 1; j <= this.rows; j++) {
                this.arrayrows.push(j);
            }

        }
        else {
            alert('Số hàng phải lớn hơn 0');
            this.arrayrows = [];
            this.rows = 10;
            for (let j = 1; j <= this.rows; j++) {
                this.arrayrows.push(j);
            }
        }
    }
}