import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'learn',
    loadChildren: () =>
      import('./learn/learn.module').then((m) => m.LearnModule),
  },
  {
    path: 'code',
    loadChildren: () => import('./code/code.module').then((m) => m.CodeModule),
  },
  {
    path: 'play',
    loadChildren: () => import('./play/play.module').then((m) => m.PlayModule),
  },
  {
    path: 'share',
    loadChildren: () =>
      import('./share/share.module').then((m) => m.ShareModule),
  },
  {
    path: 'docs',
    loadChildren: () => import('./docs/docs.module').then((m) => m.DocsModule),
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then((m) => m.FaqModule),
  },
  {
    path: 'legal',
    loadChildren: () =>
      import('./legal/legal.module').then((m) => m.LegalModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
