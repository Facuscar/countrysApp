import { Component } from '@angular/core';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.scss']
})
export class ByCountryComponent {

  constructor() { }

  term: string = 'Hello, World!'

  searchCountry() : void {
    console.log(this.term)
  }

}
