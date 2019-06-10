import { Component, OnInit } from '@angular/core';
import { Car } from '@angular/app/models/car';
import { CarService } from '../car.service';
@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
  providers: [CarService]

})


export class CarListComponent implements OnInit {

  public cars: Car[];
  public title: String;
  public errorMessage: String;
  public loading: boolean;


  constructor(private _carService: CarService) {
    this.title = 'Listado de coches';
    this.loading = true;
   }

  ngOnInit() {
    this.title = 'Listado de coches';
    this._carService.getCars().subscribe(
      result => {
        console.log('OK:' + result);
        this.cars = result['data'];
        if (!this.cars) {
          alert('error en el servidor');
        }
        this.loading = false;
      },
      error => {
        this.errorMessage = <any>error;
        if (this.errorMessage != null) {
          console.log(this.errorMessage);
          alert('Error en la peticion');
        }
      }
    )

  }

}


