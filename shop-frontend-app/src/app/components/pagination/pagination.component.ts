import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {Page} from "../../model/page";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() page?: Page;

  numbers: number[] = [];

  pageNumber: number = 1;

  @Output() goToPageEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.page != null) {
      this.numbers = Array.from(Array(this.page.totalPages).keys());
      this.pageNumber = this.page.number + 1;
    }
  }

  goToPage(page: number) {
    this.goToPageEvent.emit(page);
  }


}
