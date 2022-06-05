import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, ROUTES } from './app/app-routing.module';
import { AppComponent } from './app/app.component';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      AppRoutingModule
    ),
    environment.production ? [] : provideProtractorTestingSupport()
  ]
}).catch(err => console.error(err));
