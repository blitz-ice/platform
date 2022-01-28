import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { LegalComponent } from './legal.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
  {
    path: '',
    component: LegalComponent,
  },
  {
    path: 'imprint',
    component: ImprintComponent,
  },
  {
    path: 'disclaimer',
    component: DisclaimerComponent,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegalRoutingModule {}
