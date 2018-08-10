import {Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  public GenerateDataEmitter: EventEmitter<string>;

  constructor() {
    this.GenerateDataEmitter = new EventEmitter<string>();
  }
}
