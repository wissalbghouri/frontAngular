import { Routes } from '@angular/router';
import { PanelsComponent } from '../components/panels/panels.component';
import { ProfileComponent } from './profile/profile.component';

import { DashboardComponent } from './dashboard.component';
import { QuiSComponent } from './qui-s/qui-s.component';
import { AppoffreComponent } from './appoffre/appoffre.component';
import { ListappComponent } from './listapp/listapp.component';
import { OffrempComponent } from './offremp/offremp.component';
import { FormationComponent } from './formation/formation.component';

export const DashboardRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: 'dashboard',
        component: DashboardComponent
    },


    {

     
      path:'dashboard/profile',
      component:ProfileComponent

    },
    {
     path:'dashboard/qui-s',
     component:QuiSComponent

    },


    {

     
      path:'dashboard/appoffre',
      component:AppoffreComponent

    }
    ,


    {

     
      path:'dashboard/listapp',
      component:ListappComponent

    }
    ,


    {

     
      path:'dashboard/offremp',
      component:OffrempComponent

    }

    ,


    {

     
      path:'dashboard/formation',
      component:FormationComponent

    }
  
  
  ]
}
];
