import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PieGraphData } from '../../model/pie-graph/pie-graph-data.interface';
import { PiegraphServiceAbstract } from './pie-grapg.service.abstract';

@Injectable()
export class PieGraphService extends PiegraphServiceAbstract {
    constructor(private _http: HttpClient) {
        super();
    }

    public getData(): PieGraphData[] {
        let pieData: PieGraphData[];
        this._http.get<PieGraphData[]>('../json/pie-graph-data.json').subscribe((data: PieGraphData[]) => {
            pieData = data;
        });

        return pieData;
    }
}
