import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-star-rating',
    templateUrl: './star-rating.component.html',
    styleUrls: ['./star-rating.scss']
})
export class StarRatingComponent {
    @Input() starRating = 0;


    populateStarRating() {
        const starRating = [false, false, false, false, false];
        for (let i = 0; i < this.starRating; i++) {
            starRating[i] = true;
        }
        return starRating;
    }
}
