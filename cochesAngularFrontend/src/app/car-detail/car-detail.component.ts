import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { CarService } from '../car.service';
import { Car } from '../models/car';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
  providers: [CarService]
  })

export class CarDetailComponent implements OnInit {
  public title: String;
  public errorMessage: String;
  public car: Car;


  constructor(private _carService: CarService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.getCar();
  }

  getCar() {
    this._route.params.forEach((params: Params) => {
      const id = params['id'];
      console.log('OK car id:' + id);
      this._carService.getCar(id).subscribe(
        response => {
          this.car = response['data'];
          console.log('car:' + this.car);
          if (!this.car) {
            this._router.navigate(['/']);
          }
        },
        error => {
          this.errorMessage = <any>error;
          if (this.errorMessage != null) {
            console.log(this.errorMessage);
            alert('Error en la peticion');
          }
        }
      );
    });

  }

}


