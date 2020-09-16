import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';

import { HomeComponent } from './home/home.component';
import { ViewsComponent } from './views.component';
import { ToyotaComponent } from './toyota/toyota.component';
import { ComasaComponent } from './comasa/comasa.component';
import { RegionalTelhasComponent } from './regional-telhas/regional-telhas.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        NgbModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_KEY_HERE'
        })
    ],
    declarations: [
        HomeComponent,
        ViewsComponent,
        ToyotaComponent,
        ComasaComponent,
        RegionalTelhasComponent,
    ]
})
export class ViewsModule { }
