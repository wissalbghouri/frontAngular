import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';

import { QuiSComponent } from './qui-s/qui-s.component';
import { AppoffreComponent } from './appoffre/appoffre.component';
import { ListappComponent } from './listapp/listapp.component';
import { OffrempComponent } from './offremp/offremp.component';
import { FormationComponent } from './formation/formation.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(DashboardRoutes),
        FormsModule,
        MdModule,
        MaterialModule
    ],
    declarations: [DashboardComponent,  QuiSComponent, AppoffreComponent, ListappComponent, OffrempComponent, FormationComponent]
})

export class DashboardModule {}
