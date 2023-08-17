import { Component } from '@angular/core';
import { Dashboard, DashboardWidget } from 'src/app/models/dashboard-widget';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  draggingWidget: DashboardWidget | undefined
  draggedIndex: number | undefined = undefined
  originalOrder: DashboardWidget[] = []

  //Control how often the drag event is fired in a given time period
  bounce: boolean = false

  data: Dashboard = {
    widgets: [{
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
    }, {
      id: 2,
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
    }, {
      id: 3,
      type: "chart",
      chartType: "line",
      title: "Line Chart",
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
    }, {
      id: 4,
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
    }]
  }

  dragStart(event: MouseEvent, widget: DashboardWidget) {
    this.originalOrder = this.data.widgets.slice()
    this.draggedIndex = this.data.widgets.indexOf(widget)
    this.draggingWidget = widget
  }

  dragOver(event: DragEvent, widget: DashboardWidget) {
    if (!this.draggingWidget || this.bounce) return
    if (widget.id == this.draggingWidget?.id) return

    this.data.widgets.splice(this.data.widgets.indexOf(this.draggingWidget), 1)

    const targetIndex = this.data.widgets.indexOf(widget)
    const front = targetIndex < this.draggedIndex!

    this.data.widgets.splice(front ? targetIndex : targetIndex + 1, 0, this.draggingWidget)
    this.draggedIndex = this.data.widgets.indexOf(this.draggingWidget)

    setTimeout(() => { this.bounce = false }, 20)
  }

  dragEnd(event: MouseEvent) {
    this.draggingWidget = undefined
    this.draggedIndex = undefined
  }
}
