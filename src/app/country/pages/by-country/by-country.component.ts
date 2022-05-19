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

  term: string = '';
  notFound: boolean = false;
  countries: Country[] = [];

  search( term: string) : void {
    this.notFound = false;
    this.term = term;
    this.countryService.search( this.term, 'name' ).subscribe( (countries) => {
      this.countries = countries;
    }, (err) => {
      this.notFound = true;
      this.countries = []; 
    } );
  }

  preSearch( term: string) :void {
    console.log('Pre search', term);
  }

}
