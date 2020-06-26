// arquivo responsável pela inicialização do bootstrap

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Nesse caso, o bootstrap recebe AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
