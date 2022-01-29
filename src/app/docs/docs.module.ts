import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsRoutingModule } from './docs-routing.module';
import { DocsComponent } from './docs.component';
import { TranslocoModule } from '@ngneat/transloco';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [DocsComponent],
  imports: [
    CommonModule,
    DocsRoutingModule,
    TranslocoModule,
    MatGridListModule,
    MatCardModule,
  ],
})
export class DocsModule {}
