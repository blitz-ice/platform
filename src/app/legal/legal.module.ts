import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalRoutingModule } from './legal-routing.module';
import { LegalComponent } from './legal.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';


@NgModule({
  declarations: [
    LegalComponent,
    ImprintComponent,
    DisclaimerComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    CommonModule,
    LegalRoutingModule
  ]
})
export class LegalModule { }
