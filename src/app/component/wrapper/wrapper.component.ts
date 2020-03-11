import { Component, OnInit } from '@angular/core';
import { GraphTypeEnum } from '../../enums/chart.enums';
import { PieGraphComponent } from '../graphs/pie-graph/pie-graph.component';

import { PiegraphServiceAbstract } from 'src/app/service/pie-graph/pie-grapg.service.abstract';
import { BubbleGraphComponent } from '../graphs/bubble-graph/bubble-graph.component';
import { StreamGraphComponent } from '../graphs/stream-graph/stream-graph.component';

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
    public bubbleGraphButtonText = 'Bubble Graph';
    public streamGraphButtonText = 'Stream Graph';
    public graphTypeEnum: GraphTypeEnum;

    constructor(private piegraphService: PiegraphServiceAbstract) {

    }

    public ngOnInit(): void {
        this.chartName = 'Pie';
        this.graphComponent = PieGraphComponent;
        this.headingMessage = this.setHeading(this.chartName);

    }

    public showChart(chart: string): void {
        switch (chart) {
            case GraphTypeEnum.Pie:
                this.chartName = 'Pie';
                this.headingMessage = this.setHeading(this.chartName);
                this.graphComponent = PieGraphComponent;
                break;
            case GraphTypeEnum.Stream:
                this.chartName = 'Stream';
                this.headingMessage = this.setHeading(this.chartName);
                this.graphComponent = StreamGraphComponent;
                break;
            case GraphTypeEnum.Bubble:
                this.chartName = 'Bubble';
                this.headingMessage = this.setHeading(this.chartName);
                this.graphComponent = BubbleGraphComponent;
                break;
            default:
                this.chartName = 'Pie';
                this.headingMessage = this.setHeading(this.chartName);
                this.graphComponent = PieGraphComponent;
        }
    }

    public setHeading(chartName: string): string {
        return `${chartName} Graph Demo`;
    }
}
