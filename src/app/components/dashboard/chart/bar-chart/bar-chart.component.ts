import { Component, OnInit, Input } from '@angular/core';
import { EChartsOption } from 'echarts';
import { BarChartWidget } from 'src/app/models/dashboard-widget';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  options: EChartsOption = {}

  @Input()
  data: BarChartWidget | undefined = {
    id: 1,
    type: "chart",
    chartType: "bar",
    title: "Bar Chart",
    height: 1,
    width: 1,
    xAxisData: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    xAxisName: "Day",
    yAxisName: "Sales",
    seriesData: [{
      data: [120, 200, 150, 80, 70, 110, 130],
      name: "Clothing"
    }, {
      data: [90, 150, 200, 120, 100, 80, 110],
      name: "Food"
    }, {
      data: [130, 100, 120, 150, 180, 130, 90],
      name: "Drink"
    }]
  }

  ngOnInit(): void {
    if (!this.data) return

    this.options = {
      tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
      grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
      title: { text: this.data.title, show: true },
      xAxis: {
        type: 'category',
        data: this.data.xAxisData,
        name: this.data.xAxisName,
        axisTick: { alignWithLabel: true }
      },
      series: this.data.seriesData.map(x => ({
        name: x.name,
        type: 'bar',
        data: x.data
      })),
      yAxis: { type: 'value', name: this.data.yAxisName },
      legend: { data: this.data.seriesData.map(x => x.name) }
    }
  }
}
