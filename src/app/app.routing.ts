import { RegionalTelhasComponent } from './views/regional-telhas/regional-telhas.component';
import { ComasaComponent } from './views/comasa/comasa.component';

import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ToyotaComponent } from './views/toyota/toyota.component';

const routes: Routes = [
    { path: '',                              component: HomeComponent },
    { path: 'toyota',                        component: ToyotaComponent },
    { path: 'comasa',                        component: ComasaComponent },
    { path: 'regional-telhas',               component: RegionalTelhasComponent },
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
