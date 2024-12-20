import { Routes } from '@angular/router';
import { HomeComponent } from './components/core/home/home.component';
import { MsalLoginComponent } from './components/core/msal-login/msal-login.component';

export const routes: Routes = [
    { path: '', component: MsalLoginComponent },
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
