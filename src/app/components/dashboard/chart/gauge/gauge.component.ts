import { Component, Input } from '@angular/core';
import { EChartsOption } from 'echarts';
import { GaugeWidget } from 'src/app/models/dashboard-widget';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent {
  options: EChartsOption = {}

  @Input()
  data: GaugeWidget | undefined = {
    id: 1,
    type: "chart",
    chartType: "gauge",
    title: "Gauge",
    height: 1,
    width: 1,
    seriesData: {
      data: [{
        name: "Terrible",
        value: 5
      }, {
        name: "Poor",
        value: 7
      }, {
        name: "Average",
        value: 20
      }, {
        name: "Good",
        value: 13
      }, {
        name: "Excellent",
        value: 55
      }],
      name: "Clothing"
    }
  }

  ngOnInit(): void {
    if (!this.data) return

    this.options = {
      tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
      grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
      title: { text: this.data.title, show: true, left: 'center' },
      series: [{
        type: "gauge",
        startAngle: 90,
        endAngle: -270,
        pointer: { show: false },
        progress: { show: true, overlap: false, roundCap: false, clip: false },
        axisLine: { lineStyle: { width: 50 } },
        splitLine: {show: false, distance: 0, length: 10},
        axisTick: { show: false },
        axisLabel: { show: false, distance: 50 },
        detail: {
          width: 50,
          height: 12,
          fontSize: 12,
          color: 'inherit',
          borderColor: 'inherit',
          borderRadius: 5,
          borderWidth: 1,
          formatter: '{value}%'
        },
        data: this.data.seriesData.data.map(x=>{
          return {
            value: x.value,
            name: x.name
          }
        })
      }]
    }
  }
}
