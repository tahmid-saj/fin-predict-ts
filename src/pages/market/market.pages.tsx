import { Fragment } from "react/jsx-runtime"
import MarketDataForm from "../../components/market/market-data-form/market-data-form.component"
import MarketDataGraph from "../../components/market/market-data-graph/market-data-graph.component"
import MarketDataTable from "../../components/market/market-data-table/market-data-table.component"

const Market = () => {
  return (
    <Fragment>
      <MarketDataForm/>
      <br/>
      <MarketDataGraph/>
      <br/>
      <MarketDataTable/>
    </Fragment>
  )
}

export default Market