import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { ShareModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';
import {ChartsModule} from 'ng2-charts';

//Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccoutSettingComponent } from './accout-setting/accout-setting.component';


@NgModule({
    declarations:[
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        PagesComponent,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccoutSettingComponent
    ],
    exports:[
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        PagesComponent
    ], imports :[
        ShareModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]

})
export class PagesModule{}