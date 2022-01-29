import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { languageKeys } from '../core/constants/language-keys.const';
import { routingUrls } from '../core/constants/routing.const';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { LegalComponent } from './legal.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
  {
    path: '',
    component: LegalComponent,
  },
  ...languageKeys.map((languageKey: string) => ({
    path: routingUrls['imprint'][languageKey].split('/').reverse()[0],
    component: ImprintComponent,
  })),
  ...languageKeys.map((languageKey: string) => ({
    path: routingUrls['disclaimer'][languageKey].split('/').reverse()[0],
    component: DisclaimerComponent,
  })),
  ...languageKeys.map((languageKey: string) => ({
    path: routingUrls['privacyPolicy'][languageKey].split('/').reverse()[0],
    component: PrivacyPolicyComponent,
  })),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegalRoutingModule {}
