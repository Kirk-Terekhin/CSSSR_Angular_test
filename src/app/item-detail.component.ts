import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from "@angular/core";

@Component({
  // tslint:disable-next-line
  selector: "[item-detail]",
  template: `
    <td>{{ item.id }}</td>
    <td>{{ item.name }}</td>
    <td>{{ item.score }}</td>
    <td><input size="7" value="{{item.val}}" #note (input)="onChanged.emit(note.value)"/></td>
  `
})
export class RowComponent implements OnInit, OnChanges {
  @Input() item;
  @Output() onChanged = new EventEmitter();

  constructor() {
  }

  ngOnChanges() {
    console.log("inputs changes");
  }

  ngOnInit() {
  }

}
