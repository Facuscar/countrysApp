import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.scss']
})
export class ByCountryComponent {

  constructor( private countryService: CountryService ) { }

  term: string = 'Hello, World!';
  notFound: boolean = false;

  searchCountry() : void {
    this.notFound = false;

    this.countryService.searchCountry( this.term ).subscribe( res => {
      console.log(res)
    }, (err) => {
      this.notFound = true;
      console.log('Error', err);
    } );
  }

}
