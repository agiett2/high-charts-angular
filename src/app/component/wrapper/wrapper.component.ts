import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GraphTypeEnum } from '../../enums/chart.enums';
import { PieGraphComponent } from '../graphs/pie-graph/pie-graph.component';
import { LineGraphComponent } from '../graphs/line-graph/line-graph.component';
import { ScatterGraphComponent } from '../graphs/scatter-graph/scatter-graph.component';

@Component({
    selector: 'app-wrapper',
    templateUrl: './wrapper.component.html',
    styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
    public chartName: string;
    public graphComponent: any;
    public headingMessage: string;
    public piegraphButtonText = 'Pie Graph';
    public scatterGraphButtonText = 'Scatter Graph';
    public lineGraphButtonText = 'Line Graph';

    constructor(private _http: HttpClient) {

    }

    public ngOnInit(): void {
        this.chartName = 'Pie';
        this.graphComponent = PieGraphComponent;
        this.headingMessage = `${this.chartName} Graph Demo`;

    }

    public showChart(chart: string): void {
        switch (chart) {
            case GraphTypeEnum.Pie:
                this.chartName = 'Pie';
                this.graphComponent = PieGraphComponent;
                break;
            case GraphTypeEnum.Line:
                this.chartName = 'Line';
                this.graphComponent = LineGraphComponent;
                break;
            case GraphTypeEnum.Scatter:
                this.chartName = 'Scatter';
                this.graphComponent = ScatterGraphComponent;
                break;
            default:
                this.chartName = 'Pie';
                this.graphComponent = PieGraphComponent;
        }
    }
}
