import { Routes } from '@angular/router';
import { HomeComponent } from './components/core/home/home.component';
import { MsalLoginComponent } from './components/core/msal-login/msal-login.component';
import { SessionTimeoutComponent } from './components/core/session-timeout/session-timeout.component';
import { AccessDeniedComponent } from './components/core/access-denied/access-denied.component';

export const routes: Routes = [
    { path: '', component: MsalLoginComponent },
    { path: 'msal', component: MsalLoginComponent },
    { path: 'session-timeout', component: SessionTimeoutComponent },
    { path: 'access-denied', component: AccessDeniedComponent },
    // { path: '', component: HomeComponent },
    {
        path: '', component: HomeComponent,
        children: [
            {
                path: 'request', loadChildren: () => import('./components/request/request.module').then(mod => mod.RequestModule)
            },
            {
                path: 'email-messages', loadChildren: () => import('./components/admin/email-messages/email-messages.module').then(mod => mod.EmailMessagesModule)
            },
            {
                path: 'email-distribution', loadChildren: () => import('./components/admin/email-distribution/email-distribution.module').then(mod => mod.EmailDistributionModule)
            },
        ]
    }
];
