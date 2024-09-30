import "./two-week-predictions-graph.styles"

import ReactApexChart from "react-apexcharts"
import { ApexOptions } from "apexcharts"
import { COLOR_CODES, COMMON_SPACING } from "../../../../utils/constants/shared.constants"
import { PredictionsContext } from "../../../../contexts/predictor/predictions.context"
import { PredictionsContextType } from "../../../../contexts/predictor/predictions.types"
import { PREDICTION_TICKERS } from "../../../../utils/constants/predictions.constants"
import { Fragment, useContext } from "react"

const TwoWeekPredictionsGraph = () => {
  const { displayedPredictionData } = useContext<PredictionsContextType>(PredictionsContext)

  if (!displayedPredictionData || !displayedPredictionData.twoWeekPredictions) {
    return (
      <Fragment/>
    )
  }

  // Define the data series for the chart
  const series = [
    {
      name: PREDICTION_TICKERS[0],
      data: displayedPredictionData.twoWeekPredictions.predictionPrices
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
      text: `${PREDICTION_TICKERS[0]} - 2 Week Predictions`,
      align: "left",
    },
    labels: displayedPredictionData.twoWeekPredictions.predictionDates as string[],
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
    <ReactApexChart
      options={ options }
      series={ series }
      type="area"
      height={ COMMON_SPACING.lineChart.height }
      width={ COMMON_SPACING.lineChart.width }>
    </ReactApexChart>
  )
}

export default TwoWeekPredictionsGraph