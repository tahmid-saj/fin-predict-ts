import "./market-data-graph.styles"

import ReactApexChart from "react-apexcharts"
import { ApexOptions } from "apexcharts"
import { COLOR_CODES, COMMON_SPACING } from "../../../utils/constants/shared.constants";
import { MarketDataGraphContainer } from "./market-data-graph.styles";

const MarketDataGraph = () => {

  // Define the data series for the chart
  const series = [
    {
      name: "AAPL",
      data: [1, 2, 3],
    },
  ];

  // Define the options for the ApexChart, typed with ApexOptions
  const options: ApexOptions = {
    chart: {
      type: "area",
      zoom: {
        enabled: true,
      },
      foreColor: COLOR_CODES.text[0]
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Title",
      align: "left",
    },
    labels: ["2", "3", "4"],
    xaxis: {
      type: "category", // Correct the type to 'category' for string labels
      labels: {
        show: false,
      },
    },
    yaxis: {
      opposite: false,
    },
    legend: {
      horizontalAlign: "right",
    },
  };

  return (
    <MarketDataGraphContainer>
      <ReactApexChart
        options={ options }
        series={ series }
        type="line"
        height={ COMMON_SPACING.lineChart.height }
        width={ COMMON_SPACING.lineChart.width }>
      </ReactApexChart>
    </MarketDataGraphContainer>
  )
}

export default MarketDataGraph