import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { languageKeys } from './core/constants/language-keys.const';
import { routingUrls } from './core/constants/routing.const';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./landing/landing.module').then((m) => m.LandingModule),
  },
  ...languageKeys.map((languageKey: string) => ({
    path: routingUrls['learn'][languageKey],
    loadChildren: () =>
      import('./learn/learn.module').then((m) => m.LearnModule),
  })),
  ...languageKeys.map((languageKey: string) => ({
    path: routingUrls['develop'][languageKey],
    loadChildren: () =>
      import('./develop/develop.module').then((m) => m.DevelopModule),
  })),
  ...languageKeys.map((languageKey: string) => ({
    path: routingUrls['play'][languageKey],
    loadChildren: () => import('./play/play.module').then((m) => m.PlayModule),
  })),
  ...languageKeys.map((languageKey: string) => ({
    path: routingUrls['share'][languageKey],
    loadChildren: () =>
      import('./share/share.module').then((m) => m.ShareModule),
  })),
  ...languageKeys.map((languageKey: string) => ({
    path: routingUrls['docs'][languageKey],
    loadChildren: () => import('./docs/docs.module').then((m) => m.DocsModule),
  })),
  ...languageKeys.map((languageKey: string) => ({
    path: routingUrls['faq'][languageKey],
    loadChildren: () => import('./faq/faq.module').then((m) => m.FaqModule),
  })),
  ...languageKeys.map((languageKey: string) => ({
    path: routingUrls['legal'][languageKey],
    loadChildren: () =>
      import('./legal/legal.module').then((m) => m.LegalModule),
  })),
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
