import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevelopRoutingModule } from './develop-routing.module';
import { DevelopComponent } from './develop.component';
import { AceConfigInterface, AceModule, ACE_CONFIG } from 'ngx-ace-wrapper';
import { NgxMoveableModule } from 'ngx-moveable';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const DEFAULT_ACE_CONFIG: AceConfigInterface = {};

@NgModule({
  declarations: [DevelopComponent],
  imports: [
    CommonModule,
    DevelopRoutingModule,
    AceModule,
    NgxMoveableModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [
    {
      provide: ACE_CONFIG,
      useValue: DEFAULT_ACE_CONFIG,
    },
  ],
})
export class DevelopModule {}
