import { NewsModule } from './modules/news/news.module';
import { FeaturedModule } from './modules/featured/featured.module';
import { WorkModule } from './modules/work/work.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';

@NgModule({
  declarations: [
    //Main component
    AppComponent,
    //Common components
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    //Angular core modules
    BrowserModule,
    //Core & Shared modules
    CoreModule,
    SharedModule,
    //Application modules
    WorkModule,
    FeaturedModule,
    NewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
