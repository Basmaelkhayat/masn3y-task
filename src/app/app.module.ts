import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewInComponent } from './newIn/newIn.component';
import { CardNewInComponent } from './card-new-in/card-new-in.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { AppsComponent } from './apps/apps.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NewInComponent,
    CardNewInComponent,
    PlatformsComponent,
    AppsComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,IvyCarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
