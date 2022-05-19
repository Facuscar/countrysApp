import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.scss']
})
export class CountryInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';

  ngOnInit(): void {
    this.debouncer.pipe(
      debounceTime(300)
    ).subscribe( value => {
      	this.onDebounce.emit(value);
    });
  }

  debouncer: Subject<string> = new Subject();

  term: string = '';

  searchCountry() :void {
    this.onEnter.emit(this.term);
  }

  pressedKey() :void{
    this.debouncer.next ( this.term );
  }

}
