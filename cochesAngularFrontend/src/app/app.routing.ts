import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
//import { CarMenuComponent } from './car-menu/car-menu.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarAddComponent } from './car-add/car-add.component';


const appRoutes: Routes = [
    // {path:'', }
    { path: '', component: CarListComponent },
    {path: 'car/:id', component: CarDetailComponent},
    {path: 'create-car', component: CarAddComponent},
    { path: '**', component: CarListComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
