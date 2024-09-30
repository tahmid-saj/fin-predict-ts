import "./market-data-graph.styles"

import ReactApexChart from "react-apexcharts"
import { ApexOptions } from "apexcharts"
import { COLOR_CODES, COMMON_SPACING } from "../../../utils/constants/shared.constants";
import { MarketDataGraphContainer } from "./market-data-graph.styles";
import { Fragment, useContext } from "react";
import { MarketDataContext } from "../../../contexts/market/market.context";
import { MarketDataContextType } from "../../../contexts/market/market.types";

interface QueryResult {
  time: string;
  closing: number;
}

const MarketDataGraph = () => {
  const { marketData } = useContext<MarketDataContextType>(MarketDataContext)

  if (!marketData || !marketData.queryResults) {
    return <Fragment/>
  }

  const { queryResults } = marketData

  // create arrays to hold times and amounts
  const queryResultsTimes: string[] = []
  const queryResultsAmounts: number[] = queryResults.map((queryResult: QueryResult) => {
    queryResultsTimes.push(queryResult.time)

    return queryResult.closing
  })

  // Define the data series for the chart
  const series = [
    {
      name: marketData.marketDataTicker,
      data: queryResultsAmounts
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
      text: `${marketData.marketDataTicker} (${marketData.marketDataStartDate} - ${marketData.marketDataEndDate}, ${marketData.marketDataInterval} interval)`,
      align: "left",
    },
    labels: queryResultsTimes,
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
        type="area"
        height={ COMMON_SPACING.lineChart.height }
        width={ COMMON_SPACING.lineChart.width }>
      </ReactApexChart>
    </MarketDataGraphContainer>
  )
}

export default MarketDataGraph