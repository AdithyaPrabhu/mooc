import { Component, OnInit, Input } from '@angular/core';
import { Tile } from 'src/app/body/dashboard/dashboard.model';

@Component({
  selector: 'app-dashboard-tile',
  templateUrl: './dashboard-tile.component.html',
  styleUrls: ['./dashboard-tile.component.scss']
})
export class DashboardTileComponent implements OnInit {

  @Input() tileData: Tile;

  constructor() { }

  ngOnInit() {
  }

  populateStarRating() {
    const starRating = [false, false, false, false, false];
    for (let i = 0; i < this.tileData.rating; i++) {
      starRating[i] = true;
    }
    return starRating;
  }

}
