import { Injectable } from '@angular/core';
import { Tile, TableRow } from 'src/app/body/dashboard/dashboard.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class DashboardService {

    constructor(private httpService: HttpClient) { }

    getTileData(): Observable<Tile[]> {
        const url = environment.courseDetailsServiceUrl + '/dashboard/course-tiles';
        return this.httpService.get<Tile[]>(url);
    }

}
