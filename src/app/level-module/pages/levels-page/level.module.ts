import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LevelsRoutingModule } from './level-routing.module';
// import { TopNavModule } from '../top-nav/top-nav.module';
// import { BottomNavModule } from '../bottom-nav/bottom-nav.module';


@NgModule({
  imports: [
    CommonModule,
    LevelsRoutingModule,
    // TopNavModule,
    // BottomNavModule
  ]
})
export class LevelsModule { }
