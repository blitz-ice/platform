import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq.component';
import { TranslocoModule } from '@ngneat/transloco';

import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [FaqComponent],
  imports: [
    CommonModule,
    FaqRoutingModule,
    TranslocoModule,
    MatExpansionModule,
  ],
})
export class FaqModule {}
