import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MissionsRoutingModule } from './missions-routing.module';
import { MissionsPageComponent } from './missions-page.component';


@NgModule({
  declarations: [MissionsPageComponent],
  imports: [
    CommonModule,
    MissionsRoutingModule,
  ]
})
export class MissionsModule { }
