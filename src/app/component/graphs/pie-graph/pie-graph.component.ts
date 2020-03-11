import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { PiegraphServiceAbstract } from '../../../service/pie-graph/pie-grapg.service.abstract';
import * as Variablepie from 'highcharts/modules/variable-pie';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

import { PieGraphDataInterface } from 'src/app/model/pie-graph/pie-graph-data.interface';
HC_exporting(Highcharts);
Variablepie(Highcharts)
@Component({
  selector: 'app-pie-graph',
  templateUrl: './pie-graph.component.html',
  styleUrls: ['./pie-graph.component.scss']
})
export class PieGraphComponent implements OnInit {
  public chart: Chart;
  public Variablepie = Variablepie;
  public Highcharts = Highcharts;
  public chartConstructor = 'chart';
  public updateFromInput = false;
  constructor(private pieGraphService: PiegraphServiceAbstract) {}

  public ngOnInit(): void {
    this.chart = new Chart({
      chart: {
        type: 'variablepie',
        height: '50%'
      },
      title: {
        text: 'Coronavirus cases by countries'
      },
      tooltip: {
        headerFormat: '',
        pointFormat:
          '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
          'Total Population: <b>{point.y} M</b><br/>' +
          'Confirmed Coronavirus cases: <b>{point.z}</b><br/>'
      },
      series: [
        {
          minPointSize: 10,
          innerSize: '20%',
          zMin: 0,
          name: 'countries',
          type: 'variablepie',
          data: this.pieGraphService.getData()
        }
      ]
    });
  }
  public chartCallBack(): Chart {
    return this.chart;
  }
}
