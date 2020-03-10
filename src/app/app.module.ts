import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WrapperComponent } from './component/wrapper/wrapper.component';
import { ScatterGraphComponent } from './component/graphs/scatter-graph/scatter-graph.component';
import { LineGraphComponent } from './component/graphs/line-graph/line-graph.component';
import { PieGraphComponent } from './component/graphs/pie-graph/pie-graph.component';
import { PiegraphServiceAbstract } from './service/pie-graph/pie-grapg.service.abstract';
import { PieGraphService } from './service/pie-graph/pie-graph.service';


@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    ScatterGraphComponent,
    LineGraphComponent,
    PieGraphComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: PiegraphServiceAbstract, useClass: PieGraphService }],
  bootstrap: [AppComponent],
  entryComponents: [LineGraphComponent, ScatterGraphComponent, PieGraphComponent]
})
export class AppModule { }
