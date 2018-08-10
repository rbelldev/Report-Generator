import {Component, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'total-damage',
  templateUrl: './total-damage.component.html',
  styleUrls: ['./total-damage.component.css']
})
export class TotalDamageComponent implements OnInit {

  @Input() GenerateDataEmitter: EventEmitter<string>;

  constructor() { }

  ngOnInit() {
  }

}
