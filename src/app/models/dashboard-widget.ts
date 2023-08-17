export type Dashboard = {
    title?: string
    widgets: DashboardWidget[]
}

export type DashboardWidget = DetailWidget | ChartWidget
export type ChartWidget = BarChartWidget | PieChartWidget | LineChartWidget | GaugeWidget
export type DetailWidget = TableWidget

export type WidgetType = WidgetChartType | WidgetDetailType

type WidgetChartType = "chart"
type WidgetDetailType = "detail"

export type ChartType = ChartBarType | ChartLineType | ChartPieType | ChartGaugeType

type ChartBarType = "bar"
type ChartLineType = "line"
type ChartPieType = "pie"
type ChartGaugeType = "gauge"

type DashboardWidgetBase = {
    id: number
    title: string
    height: number
    width: number
}

type ChartWidgetBase = {
    type: WidgetChartType
} & DashboardWidgetBase

export type DetailWidgetBase = {
    type: WidgetDetailType
} & DashboardWidgetBase

export type LineChartWidget = {
    chartType: ChartLineType
    xAxisData: any[]
    xAxisName: string
    yAxisName: string
    seriesData: { name: string, data: any[] }[]
} & ChartWidgetBase

export type BarChartWidget = {
    chartType: ChartBarType
    xAxisData: any[]
    xAxisName: string
    yAxisName: string
    seriesData: { name: string, data: any[] }[]
} & ChartWidgetBase

export type GaugeWidget = {
    chartType: ChartGaugeType
    seriesData: { name: string, data: GaugeData[] }
} & ChartWidgetBase

type GaugeData = {
    value: number
    name: string
}

export type PieChartWidget = {
    seriesData: { name: string, data: { value: number, name: string }[] }
    chartType: ChartPieType
} & ChartWidgetBase

export type TableWidget = {

} & DetailWidgetBase