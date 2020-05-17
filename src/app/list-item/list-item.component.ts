import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() item: object;
  @Output() deleteItem = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {}


  delete(item: object) {
    console.log(item);
    this.deleteItem.emit(item);
  }

}