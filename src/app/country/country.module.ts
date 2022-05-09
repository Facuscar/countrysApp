import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { CountryComponent } from './pages/country/country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';



@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent,
    CountryComponent,
    ByRegionComponent
  ],
  exports: [
    ByCapitalComponent,
    ByCountryComponent,
    CountryComponent,
    ByRegionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CountryModule { }
