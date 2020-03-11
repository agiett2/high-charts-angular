import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'angular-highcharts';
import * as HighchartsMore from 'highcharts/highcharts-more';
import * as HighchartsExporting from 'highcharts/modules/exporting';
import { BubbleGraphServiceAbstract } from 'src/app/service/bubble-graph/bubble-graph.service.abstract';

@Component({
  selector: 'app-bubble-graph',
  templateUrl: './bubble-graph.component.html',
  styleUrls: ['./bubble-graph.component.scss']
})
export class BubbleGraphComponent implements OnInit {
  public Highcharts = Highcharts;
  public chart: Chart;
  constructor(private bubbleGraphService: BubbleGraphServiceAbstract) {}

  public ngOnInit(): void {
    this.chart = new Chart({
      chart: {
        type: 'packedbubble',
        height: '70%'
      },
      title: {
        text: 'Carbon emissions around the world (2020)'
      },
      tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value}m CO<sub>2</sub>'
      },
      plotOptions: {
        packedbubble: {
          minSize: '20%',
          maxSize: '100%',
          layoutAlgorithm: {
            gravitationalConstant: 0.05,
            splitSeries: 'true',
            seriesInteraction: false,
            dragBetweenSeries: true,
            parentNodeLimit: true
          },
          dataLabels: {
            enabled: true,
            format: '{point.name}',
            filter: {
              property: 'y',
              operator: '>',
              value: 250
            },
            style: {
              color: 'black',
              textOutline: 'none',
              fontWeight: 'normal'
            }
          }
        }
      },
      series: [
        {
          name: 'Europe',
          type: 'packedbubble',
          data: this.bubbleGraphService.getEuropeData()
        },
        {
          name: 'Africa',
          type: 'packedbubble',
          data: this.bubbleGraphService.getAfricaData()
        },
        {
          name: 'Oceania',
          type: 'packedbubble',
          data: this.bubbleGraphService.getOceaniaData()
        },
        {
          name: 'North America',
          type: 'packedbubble',
          data: this.bubbleGraphService.getNorthAmericaData()
        },
        {
          name: ' South America',
          type: 'packedbubble',
          data: this.bubbleGraphService.getSouthAmericaData()
        },
        {
          name: 'Asia',
          type: 'packedbubble',
          data: this.bubbleGraphService.getAsiaData()
        }
      ]
    });
  }
}
