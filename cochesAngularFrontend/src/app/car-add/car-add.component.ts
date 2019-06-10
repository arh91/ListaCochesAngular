import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  public title: String;
  public car: Car;

  constructor() {
    this.title = 'Crear nuevo coche';

  }

  ngOnInit() {
    this.car = new Car('', '', 0);
  }
onSubmit() {   }
 
}
