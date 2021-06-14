import { Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { PricingComponent } from './pricing/pricing.component';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { OffreemploiComponent } from './offreemploi/offreemploi.component';
import { ListformationComponent } from './listformation/listformation.component';

export const PagesRoutes: Routes = [

    {
        path: '',
        children: [ {
            path: 'login',
            component: LoginComponent
        }, {
            path: 'lock',
            component: LockComponent
        }, {
            path: 'register',
            component: RegisterComponent
        }, {
            path: 'pricing',
            component: PricingComponent
        }



        , {
            path: 'list',
            component: ListComponent
        }
        , {
            path: 'offreemploi',
            component: OffreemploiComponent
        }


        , {
            path: 'listformation',
            component: ListformationComponent
        }
    
    
    
    
    ]
    }
];
