import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PopularProductsComponent } from './popular-products/popular-products.component';
import { TeamComponent } from './team/team.component';
import { SpecialPromoComponent } from './special-promo/special-promo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './shared/components/login/login.component';
import { RegisterComponent } from './shared/components/register/register.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PopularProductsComponent,
    TeamComponent,
    SpecialPromoComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
    ReactiveFormsModule,
  ]
})
export class GuestModule { }
