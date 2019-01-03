import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  pageCount = 1;

  constructor() { }

  ngOnInit() {
  }

  nextPage(): void {
    this.pageCount++;
  }

}
