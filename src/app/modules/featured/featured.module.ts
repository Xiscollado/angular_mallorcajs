import { FeaturedComponent } from './../../components/featured/featured.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [FeaturedComponent],
  declarations: [FeaturedComponent]
})
export class FeaturedModule {
  //Module that manage featured events in the platform
}
