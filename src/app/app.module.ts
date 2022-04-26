import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './shared/navigator/navigator.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabsComponent } from './shared/tabs/tabs.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { BubblesComponent } from './shared/bubbles/bubbles.component';
import { Carousel2Component } from './shared/carousel2/carousel2.component';
import { WhyPartOfHefgrowComponent } from './shared/why-part-of-hefgrow/why-part-of-hefgrow.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    TabsComponent,
    LandingPageComponent,
    CarouselComponent,
    BubblesComponent,
    Carousel2Component,
    WhyPartOfHefgrowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
