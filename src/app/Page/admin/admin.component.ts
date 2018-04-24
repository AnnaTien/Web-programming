import { Component, OnInit, Injectable } from '@angular/core';
import {NgForOf, CurrencyPipe} from '@angular/common'
import { Supplier, Products, Type } from '../models/dataSample';
import { Router } from '@angular/router';

@Injectable()
@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {
    
    constructor(){

    }
    ngOnInit(){

    }
}