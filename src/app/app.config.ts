import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserAnimationsModule, provideNoopAnimations } from '@angular/platform-browser/animations';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { environment } from '../environments/environment';
import { MSAL_INSTANCE, MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { InterceptorService } from './shared/auth/interceptor.service';
import { DialogService } from 'primeng/dynamicdialog';
import { BrowserModule } from '@angular/platform-browser';
import { ConfirmationService, MessageService } from 'primeng/api';

export function MSALInstanceFactory(): IPublicClientApplication {
  const objEnv = environment.returnParameters();
  return new PublicClientApplication({
    auth: {
      clientId: objEnv.msalClientId,
      // authority: `https://login.microsoftonline.com/${objEnv.msalTenantId}`,
      redirectUri: objEnv.redirectUri
    }
  })
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserModule, BrowserAnimationsModule),
    provideNoopAnimations(),
    provideHttpClient(withInterceptorsFromDi(), withFetch()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    DialogService,
    MessageService,
    ConfirmationService,
    MsalService,
    MsalBroadcastService,
  ],

};
