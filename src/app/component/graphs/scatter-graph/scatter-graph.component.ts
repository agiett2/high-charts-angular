import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-scatter-graph',
    templateUrl: './scatter-graph.component.html',
    styleUrls: ['./scatter-graph.component.scss']
})
export class ScatterGraphComponent implements OnInit {
    @Input() data?: any;
    constructor() { }

    public ngOnInit(): void {

    }
}
