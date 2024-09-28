import { Fragment } from "react/jsx-runtime"
import MarketDataForm from "../../components/market/market-data-form/market-data-form.component"
import MarketDataGraph from "../../components/market/market-data-graph/market-data-graph.component"
import MarketDataTable from "../../components/market/market-data-table/market-data-table.component"
import { useContext } from "react"
import { MarketDataContext } from "../../contexts/market/market.context"

const Market = () => {
  const { marketData } = useContext(MarketDataContext)

  return (
    <Fragment>
      <MarketDataForm/>
      <br/>
      {
        marketData && marketData.queryResults && marketData.queryResults.length !== 0 &&
        <Fragment>
          <MarketDataGraph/>
          <br/>
          <MarketDataTable/>
        </Fragment>
      }
    </Fragment>
  )
}

export default Market