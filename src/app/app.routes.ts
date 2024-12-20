import { Routes } from '@angular/router';
import { HomeComponent } from './components/core/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    // { path: '', component: HomeComponent },
    {
        path: '', component: HomeComponent,
        children: [
            {
                path: 'request', loadChildren: () => import('./components/request/request.module').then(mod => mod.RequestModule)
            },
            {
                path:'email-messages',loadChildren:()=>import('./components/admin/email-messages/email-messages.module').then(mod=>mod.EmailMessagesModule)
            },
            {
                path:'email-distribution',loadChildren:()=>import('./components/admin/email-distribution/email-distribution.module').then(mod=>mod.EmailDistributionModule)
            },
        ]
    }
];
