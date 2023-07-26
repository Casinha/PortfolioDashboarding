export type Dashboard = {
    title?: string
    widgets: DashboardWidget[]
}

export type DashboardWidget = DetailWidget | ChartWidget
export type ChartWidget = BarChartWidget | PieChartWidget | LineChartWidget | GaugeWidget

type DashboardWidgetBase = {
    id: number
    title: string
    height: number
    width: number
}

type ChartWidgetBase = {
    type: "chart"
} & DashboardWidgetBase

export type DetailWidget = {
    type: "detail"
} & DashboardWidgetBase

export type LineChartWidget = {
    chartType: "line"
    xAxisData: any[]
    xAxisName: string
    yAxisName: string
    seriesData: { name: string, data: any[] }[]
} & ChartWidgetBase

export type BarChartWidget = {
    chartType: "bar"
    xAxisData: any[]
    xAxisName: string
    yAxisName: string
    seriesData: { name: string, data: any[] }[]
} & ChartWidgetBase

export type GaugeWidget = {
    chartType: "gauge"
    seriesData: { name: string, data: GaugeData[] }
} & ChartWidgetBase

type GaugeData = {
    value: number
    name: string
}

export type PieChartWidget = {
    seriesData: { name: string, data: { value: number, name: string }[] }
    chartType: "pie"
} & ChartWidgetBase