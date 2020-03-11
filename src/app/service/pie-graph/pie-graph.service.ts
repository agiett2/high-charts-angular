import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PieGraphDataInterface } from '../../model/pie-graph/pie-graph-data.interface';
import { PiegraphServiceAbstract } from './pie-grapg.service.abstract';

@Injectable()
export class PieGraphService extends PiegraphServiceAbstract {
  constructor(private http: HttpClient) {
    super();
  }

  public getData(): PieGraphDataInterface[] {
    const pieData: PieGraphDataInterface[] = [
      {
        name: 'Japan',
        y: 505370,
        z: 92.9
      },
      {
        name: 'China',
        y: 551500,
        z: 300
      },
      {
        name: 'United States',
        y: 312685,
        z: 124
      },
      {
        name: 'Cameroon',
        y: 78867,
        z: 137.5
      },
      {
        name: 'Australia',
        y: 301340,
        z: 201.8
      },
      {
        name: 'Switzerland',
        y: 41277,
        z: 214.5
      },
      {
        name: 'China',
        y: 357050,
        z: 235.6
      },
      {
        name: 'Mexico',
        y: 25477,
        z: 100.6
      }
    ];

    return pieData;
  }
}
