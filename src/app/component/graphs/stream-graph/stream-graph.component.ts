import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import { StreamGraphServiceAbstract } from 'src/app/service/stream-graph/stream-graph.service.abstract';
import more from 'highcharts/highcharts-more';
import StreamgraphModule from 'highcharts/modules/streamgraph';
more(Highcharts);
StreamgraphModule(Highcharts);
@Component({
  selector: 'app-stream-graph',
  templateUrl: './stream-graph.component.html',
  styleUrls: ['./stream-graph.component.scss']
})
export class StreamGraphComponent implements OnInit {
  public Highcharts = Highcharts;
  public chart: Chart;
  constructor(private streamGraphService: StreamGraphServiceAbstract) {}
  public ngOnInit(): void {
    this.chart = new Chart({
      chart: {
        type: 'streamgraph',
        marginBottom: 30,
        zoomType: 'x',
        height: '50%'
      },
      colors: this.streamGraphService.getColors(),
      title: {
        floating: true,
        align: 'left',
        text: 'Winter Olympic Medal Wins'
      },
      subtitle: {
        floating: true,
        align: 'left',
        y: 30,
        text:
          'Source: <a href="https://www.sports-reference.com/olympics/winter/1924/">sports-reference.com</a>'
      },
      xAxis: {
        maxPadding: 0,
        type: 'category',
        crosshair: true,
        categories: this.streamGraphService.getCategories(),
        labels: {
          align: 'left',
          reserveSpace: false,
          rotation: 270
        },
        lineWidth: 0,
        margin: 20,
        tickWidth: 0
      },
      yAxis: {
        visible: false,
        startOnTick: false,
        endOnTick: false
      },

      legend: {
        enabled: false
      },
      annotations: [
        {
          labels: [
            {
              point: {
                x: 5.5,
                xAxis: 0,
                y: 30,
                yAxis: 0
              },
              text: 'Cancelled<br>during<br>World War II'
            },
            {
              point: {
                x: 18,
                xAxis: 0,
                y: 90,
                yAxis: 0
              },
              text: 'Soviet Union fell,<br>Germany united'
            }
          ],
          labelOptions: {
            backgroundColor: 'rgba(255,255,255,0.5)',
            borderColor: 'silver'
          }
        }
      ],
      plotOptions: {
        series: {
          label: {
            minFontSize: 5,
            maxFontSize: 15,
            style: {
              color: 'rgba(255,255,255,0.75)'
            }
          }
        }
      },
      series: [
        {
          name: 'Finland',
          type: 'streamgraph',
          data: this.streamGraphService.getFinladData()
        },
        {
            name: 'Austria',
            type: 'streamgraph',
            data: this.streamGraphService.getAustriaData()
          },
          {
            name: 'Sweeden',
            type: 'streamgraph',
            data: this.streamGraphService.getSweedenData()
          },
          {
            name: 'United States',
            type: 'streamgraph',
            data: this.streamGraphService.getUnitedStatesData()
          },
          {
            name: 'Norway',
            type: 'streamgraph',
            data: this.streamGraphService.getNorwayData()
          },
          {
            name: 'East Germany',
            type: 'streamgraph',
            data: this.streamGraphService.getEastGermanyData()
          },
          {
            name: 'West Germany',
            type: 'streamgraph',
            data: this.streamGraphService.getWestGermanyData()
          },
          {
            name: 'Germany',
            type: 'streamgraph',
            data: this.streamGraphService.getGermanyData()
          },
          {
            name: 'Nether Lands',
            type: 'streamgraph',
            data: this.streamGraphService.getNetherlandsData()
          },
          {
            name: 'Italy',
            type: 'streamgraph',
            data: this.streamGraphService.getItalyData()
          },
          {
            name: 'Canada',
            type: 'streamgraph',
            data: this.streamGraphService.getCanadaData()
          },
          {
            name: 'Switzerland',
            type: 'streamgraph',
            data: this.streamGraphService.getSwitzerlandData()
          },
          {
            name: 'Great Britian',
            type: 'streamgraph',
            data: this.streamGraphService.getGreatBritianData()
          },
          {
            name: 'France',
            type: 'streamgraph',
            data: this.streamGraphService.getFranceData()
          },
          {
            name: 'Hungary',
            type: 'streamgraph',
            data: this.streamGraphService.getHungaryData()
          },
          {
            name: 'China',
            type: 'streamgraph',
            data: this.streamGraphService.getChinaData()
          },
          {
            name: 'South Korea',
            type: 'streamgraph',
            data: this.streamGraphService.getSouthKoreaData()
          },
          {
            name: 'Lativa',
            type: 'streamgraph',
            data: this.streamGraphService.getLatviaData()
          },
          {
            name: 'Russia',
            type: 'streamgraph',
            data: this.streamGraphService.getRussiaData()
          },
          {
            name: 'Japan',
            type: 'streamgraph',
            data: this.streamGraphService.getJapanData()
          },
          {
            name: 'Poland',
            type: 'streamgraph',
            data: this.streamGraphService.getPolandData()
          },
          {
            name: 'Spain',
            type: 'streamgraph',
            data: this.streamGraphService.getSpainData()
          },
          {
            name: 'Berlarus',
            type: 'streamgraph',
            data: this.streamGraphService.getBerlarusData()
          },
          {
            name: 'Kazakhstam',
            type: 'streamgraph',
            data: this.streamGraphService.getKazakhstamData()
          },
          {
            name: 'Denmark',
            type: 'streamgraph',
            data: this.streamGraphService.getDenmarkData()
          },
          {
            name: 'Ukraine',
            type: 'streamgraph',
            data: this.streamGraphService.getUkraineData()
          },
          {
            name: 'Romania',
            type: 'streamgraph',
            data: this.streamGraphService.getRomaniaData()
          },
          {
            name: 'Unified Team',
            type: 'streamgraph',
            data: this.streamGraphService.getUnifiedTeamData()
          },
          {
            name: 'Liechtenstein',
            type: 'streamgraph',
            data: this.streamGraphService.getLiechtensteinData()
          },
      ],
      exporting: {
        sourceWidth: 800,
        sourceHeight: 600
      }
    });
  }
}
