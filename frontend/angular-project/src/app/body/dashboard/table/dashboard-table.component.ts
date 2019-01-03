import { Component, OnInit, Input } from '@angular/core';
import { TableRow } from 'src/app/body/dashboard/dashboard.model';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss']
})
export class DashboardTableComponent implements OnInit {

  @Input() tableRows: TableRow[];

  constructor() { }

  ngOnInit() {
  }

}
