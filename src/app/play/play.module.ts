import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayRoutingModule } from './play-routing.module';
import { PlayComponent } from './play.component';
import { TranslocoModule } from '@ngneat/transloco';

import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [PlayComponent],
  imports: [CommonModule, PlayRoutingModule, TranslocoModule, MatTabsModule],
})
export class PlayModule {}
