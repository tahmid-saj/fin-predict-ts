import "./two-week-predictions-graph.styles"

import ReactApexChart from "react-apexcharts"
import { ApexOptions } from "apexcharts"
import { COLOR_CODES, COMMON_SPACING } from "../../../../utils/constants/shared.constants"
import { Fragment, useContext } from "react/jsx-runtime"
import { TwoWeekPredictionsGraphContainer } from "./two-week-predictions-graph.styles"

interface PredictionResult {
  predictionDate: string | Date;
  predictionPrice: number;
}

const TwoWeekPredictionsGraph = () => {
  // Define the data series for the chart
  const series = [
    {
      name: "predictions 2 week",
      data: [1, 2, 3]
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
      text: `2 week predictions`,
      align: "left",
    },
    labels: ["1", "2", "3"],
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
    <TwoWeekPredictionsGraphContainer>
      <ReactApexChart
        options={ options }
        series={ series }
        type="area"
        height={ COMMON_SPACING.lineChart.height }
        width={ COMMON_SPACING.lineChart.width }>
      </ReactApexChart>
    </TwoWeekPredictionsGraphContainer>
  )
}

export default TwoWeekPredictionsGraph