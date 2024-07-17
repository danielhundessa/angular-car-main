import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';

import { routers } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routers),
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
};
