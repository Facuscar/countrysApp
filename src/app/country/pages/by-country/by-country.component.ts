import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.scss']
})
export class ByCountryComponent {

  constructor( private countryService: CountryService ) { }

  term: string = 'Hello, World!';
  notFound: boolean = false;
  countries: Country[] = [];

  searchCountry() : void {
    this.notFound = false;

    this.countryService.searchCountry( this.term ).subscribe( (countries) => {
      this.countries = countries;
      console.log(this.countries);
    }, (err) => {
      this.notFound = true;
      this.countries = []; 
    } );
  }

}
