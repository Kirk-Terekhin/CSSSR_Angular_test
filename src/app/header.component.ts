import {Component, OnInit} from '@angular/core';

@Component({
  // tslint:disable-next-line
  selector: "[header]",
  template: `
    <th>№</th>
    <th>Name</th>
    <th>Score</th>
    <th>Note</th>
  `
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
