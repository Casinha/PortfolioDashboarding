import { Component, Input } from '@angular/core';
import { EChartsOption } from 'echarts';
import { PieChartWidget } from 'src/app/models/dashboard-widget';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {
  options: EChartsOption = {}

  @Input()
  data: PieChartWidget | undefined = {
    id: 1,
    type: "chart",
    chartType: "pie",
    title: "Pie Chart",
    height: 1,
    width: 1,
    seriesData: {
      name: "Sales",
      data: [{
        value: 120,
        name: "Clothing"
      }, {
        value: 90,
        name: "Food"
      }, {
        value: 200,
        name: "Drink"
      }]
    }
  }

  ngOnInit(): void {
    if (!this.data) return

    this.options = {
      tooltip: { trigger: 'item', axisPointer: { type: 'shadow' } },
      title: { text: this.data.title, show: true, left: 'center' },
      series: [{
        name: this.data.seriesData.name,
        type: "pie",
        radius: '70%',
        data: this.data.seriesData.data.map(x => x)
      }],
      legend: { orient: "vertical", left: 'left' },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  }
}
