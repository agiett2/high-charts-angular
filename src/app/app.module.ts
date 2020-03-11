import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

import { AppComponent } from './app.component';
import { WrapperComponent } from './component/wrapper/wrapper.component';

import { PieGraphComponent } from './component/graphs/pie-graph/pie-graph.component';
import { PiegraphServiceAbstract } from './service/pie-graph/pie-grapg.service.abstract';
import { PieGraphService } from './service/pie-graph/pie-graph.service';
import { HttpClientModule } from '@angular/common/http';
import { BubbleGraphServiceAbstract } from './service/bubble-graph/bubble-graph.service.abstract';
import { BubbleGraphService } from './service/bubble-graph/bubble-graph.service';
import { BubbleGraphComponent } from './component/graphs/bubble-graph/bubble-graph.component';
import { StreamGraphComponent } from './component/graphs/stream-graph/stream-graph.component';
import { StreamGraphServiceAbstract } from './service/stream-graph/stream-graph.service.abstract';
import { StreamGraphService } from './service/stream-graph/stream-graph.service';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    BubbleGraphComponent,
    StreamGraphComponent,
    PieGraphComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    HttpClientModule,
    HighchartsChartModule
  ],
  providers: [
    { provide: PiegraphServiceAbstract, useClass: PieGraphService },
    { provide: BubbleGraphServiceAbstract, useClass: BubbleGraphService },
    { provide: StreamGraphServiceAbstract,
      useClass: StreamGraphService }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    StreamGraphComponent,
    BubbleGraphComponent,
    PieGraphComponent
  ]
})
export class AppModule {}
