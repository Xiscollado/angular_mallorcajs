import { WorkComponent } from './../../components/work/work.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [WorkComponent],
  declarations: [WorkComponent]
})
export class WorkModule {
  //Module that manage work offers in the platform
}
