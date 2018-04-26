import { Component, OnInit, Injectable } from '@angular/core';
import {NgForOf, CurrencyPipe} from '@angular/common'
import { Supplier, Products, Type } from '../../models/dataSample';
import { Router } from '@angular/router';

@Injectable()
@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls:['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    
    constructor(){

    }
    ngOnInit(){

    }
    ViewDetail(id){

    }
}