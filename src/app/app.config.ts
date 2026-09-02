import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { StaticTranslateLoader } from './translate-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideTranslateService({
      fallbackLang: 'en',
      loader: {
        provide: TranslateLoader,
        useClass: StaticTranslateLoader,
      },
    }),
  ]
};
