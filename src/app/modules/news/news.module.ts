import { NewsComponent } from './../../components/news/news.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [NewsComponent],
  declarations: [NewsComponent]
})
export class NewsModule {
  //Module that manage news in the platform
}
