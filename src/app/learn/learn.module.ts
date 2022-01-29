import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnRoutingModule } from './learn-routing.module';
import { LearnComponent } from './learn.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [LearnComponent],
  imports: [
    CommonModule,
    LearnRoutingModule,
    TranslocoModule,
    MatGridListModule,
    MatCardModule,
  ],
})
export class LearnModule {}
