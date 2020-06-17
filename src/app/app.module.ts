import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProductNavComponent } from './nav/product-nav/product-nav.component';
import { MainNavComponent } from './nav/main-nav/main-nav.component';
import { HeroComponent } from './hero/hero.component';
import { MediaSliderComponent } from './media-slider/media-slider.component';
import { DesktopLibraryComponent } from './desktop-library/desktop-library.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductNavComponent,
    MainNavComponent,
    HeroComponent,
    MediaSliderComponent,
    DesktopLibraryComponent,
    EquipmentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
