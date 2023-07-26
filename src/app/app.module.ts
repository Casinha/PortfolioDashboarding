import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'
import { NgxEchartsModule } from 'ngx-echarts'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { FormsModule } from '@angular/forms';
import { BarChartComponent } from './components/dashboard/chart/bar-chart/bar-chart.component';
import { LineChartComponent } from './components/dashboard/chart/line-chart/line-chart.component';
import { PieChartComponent } from './components/dashboard/chart/pie-chart/pie-chart.component';
import { GaugeComponent } from './components/dashboard/chart/gauge/gauge.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    GaugeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
