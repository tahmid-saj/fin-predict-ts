import { Fragment } from "react/jsx-runtime"
import MarketDataForm from "../../components/market/market-data-form/market-data-form.component"
import MarketDataGraph from "../../components/market/market-data-graph/market-data-graph.component"

const Market = () => {
  return (
    <Fragment>
      <MarketDataForm/>
      <MarketDataGraph/>
    </Fragment>
  )
}

export default Market