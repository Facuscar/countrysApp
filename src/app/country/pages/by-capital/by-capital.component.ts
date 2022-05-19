import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.scss']
})
export class ByCapitalComponent {

  constructor( private CountryService: CountryService ) { }

  term: string = '';
  notFound: boolean = false;
  countries: Country[] = [];

  search( term:string) : void {
    this.notFound = false;
    this.term = term;
    this.CountryService.search(this.term, 'capital').subscribe((countries) => {
      this.countries = countries;
    }, (err) => {
      this.notFound = true;
      this.countries = [];
    });
  }

  preSearch( term: string) : void{
    console.log('Pre search in capital', term);
  }
}
