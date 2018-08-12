import {Component, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'total-healing',
  templateUrl: './total-healing.component.html',
  styleUrls: ['./total-healing.component.css']
})
export class TotalHealingComponent implements OnInit {

  @Input() GenerateDataEmitter: EventEmitter<string>;
  @Input() CharacterSearchEmitter: EventEmitter<string>;

  constructor() { }

  ngOnInit() {
  }

}
