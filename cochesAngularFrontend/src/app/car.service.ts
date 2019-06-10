import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Car } from './models/Car';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';




@Injectable()
export class CarService {
  public url: String;

  constructor(private _http: HttpClient) { 
    this.url = 'http://localhost:4000/api/';
  }

  getCars() {
    return this._http.get(this.url + 'cars')
  }

  getCar(id: String) {
    return this._http.get(this.url + 'car/' + id);
  }

}
