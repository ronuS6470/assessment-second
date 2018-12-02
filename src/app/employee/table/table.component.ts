import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  // store data
  private tableData: any[];
  // srore header
  private tableHeader: any[];
  // store key
  public tableKey: any[];

  // get value from user;
  @Input() set data(data: any) {

    if (data) {
      this.tableData = data;
      data.forEach(element => {
        this.tableKey = Object.keys(element);
      });
    }
  }
  get data() {
    return this.tableData;
  }
  // get key
  @Input() set header(data: any) {

    if (data) {
      this.tableHeader = data;
    }
  }
  get header() {
    return this.tableHeader;
  }
  // pass value to user;
  @Output() public tableDeleteClicked = new EventEmitter();
  @Output() public tableEditClicked = new EventEmitter();

  constructor() { }
  ngOnInit() { }
  public deleteRecord(id: number): void {
    this.tableDeleteClicked.emit(id);
  }
  public editRecord(id: number): void {
    this.tableEditClicked.emit(id);
  }
}


