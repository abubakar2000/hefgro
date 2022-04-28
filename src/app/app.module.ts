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
import { VendorListComponent } from './shared/vendor-list/vendor-list.component';
import { FooterComponent } from './shared/footer/footer.component';
import { EcommCategoryPageComponent } from './pages/ecomm-category-page/ecomm-category-page.component';
import { BannerSecondaryComponent } from './shared/banner-secondary/banner-secondary.component';
import { SpecificCategoryMenuComponent } from './shared/specific-category-menu/specific-category-menu.component';
import { ProductsListComponent } from './shared/products-list/products-list.component';
import { ProductsListByAllCategoriesComponent } from './shared/products-list-by-all-categories/products-list-by-all-categories.component';
import { EcomCategoryListViewComponent } from './pages/ecom-category-list-view/ecom-category-list-view.component';
import { CategoryListViewComponent } from './shared/category-list-view/category-list-view.component';
import { EcommSearchPageComponent } from './pages/ecomm-search-page/ecomm-search-page.component';

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
    JoinMailingListComponent,
    VendorListComponent,
    FooterComponent,
    EcommCategoryPageComponent,
    BannerSecondaryComponent,
    SpecificCategoryMenuComponent,
    ProductsListComponent,
    ProductsListByAllCategoriesComponent,
    EcomCategoryListViewComponent,
    CategoryListViewComponent,
    EcommSearchPageComponent
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
