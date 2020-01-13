import {Component, OnInit} from "@angular/core";
import {ApiService} from "./ApiService";
import {HeaderComponent} from "./header.component";

@Component({
  selector: "app-component",
  providers: [ApiService, HeaderComponent],
  template: `
    <table border="2" cellpadding="5">
      <thead>
      <tr header></tr>
      </thead>
      <tbody>
      <tr *ngFor="let item of items" item-detail [item]="item" (onChanged)="noteChange($event, item.id)"></tr>
      </tbody>
    </table>
  `
})
export class AppComponent implements OnInit {
  items: {
    name: string;
    score: number;
  }[];
  notes: {
    id: number,
    val: any
  }[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.handleChanges(changes => {
      this.items = this.calcScore(changes);
    });
  }

  calcScore(items) {
    return items.map(item => {
      return {
        ...this.addValue(item),
        score: Math.round((item.rate / 100) * 5)
      };
    });
  }

  addValue(item) {
    const note = this.note(item.id);
    item.val = note ? note.val : null;
    return item;
  }

  noteChange(val, id) {
    const note = this.note(id);
    if (this.notes.length && note) {
      note.val = val;
    } else {
      this.notes.push({id, val});
    }
  }

  note(id) {
    return this.notes.find(notesItem => notesItem.id === id);
  }
}
