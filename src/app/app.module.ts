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
import { RetailEcommerceLangingPageComponent } from './pages/retail-ecommerce-langing-page/retail-ecommerce-langing-page.component';
import { BannerComponent } from './shared/banner/banner.component';
import { GlassMenuComponent } from './shared/glass-menu/glass-menu.component';
import { CategoriesMenuComponent } from './shared/categories-menu/categories-menu.component';
import { MetroMenuComponent } from './shared/metro-menu/metro-menu.component';
import { TopDailyDealsComponent } from './shared/top-daily-deals/top-daily-deals.component';
import { TopRecommendationsComponent } from './shared/top-recommendations/top-recommendations.component';
import { FlexBannerComponent } from './shared/flex-banner/flex-banner.component';
import { BestSellingComponent } from './shared/best-selling/best-selling.component';
import { JoinMailingListComponent } from './shared/join-mailing-list/join-mailing-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    TabsComponent,
    LandingPageComponent,
    CarouselComponent,
    BubblesComponent,
    Carousel2Component,
    WhyPartOfHefgrowComponent,
    RetailEcommerceLangingPageComponent,
    BannerComponent,
    GlassMenuComponent,
    CategoriesMenuComponent,
    MetroMenuComponent,
    TopDailyDealsComponent,
    TopRecommendationsComponent,
    FlexBannerComponent,
    BestSellingComponent,
    JoinMailingListComponent
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
