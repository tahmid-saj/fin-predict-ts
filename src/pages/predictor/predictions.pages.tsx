import "./predictions.styles"

import InfoPaper from "../../components/shared/info-paper/info-paper.component"
import TabHeaders from "../../components/shared/tabs/tab-headers/tab-headers.component"
import TabContent from "../../components/shared/tabs/tab-content/tab-content.component"
import DailyPrediction from "../../components/predictor/daily-prediction/daily-prediction.component"
import TwoWeekPredictionsGraph from "../../components/predictor/two-week-predictions/two-week-predictions-graph/two-week-predictions-graph.component"
import TwoWeekPredictionsTable from "../../components/predictor/two-week-predictions/two-week-predictions-table/two-week-predictions-table.component"
import { PredictionsContainer } from "./predictions.styles"

const Predictions = () => {
  return (
    <PredictionsContainer>
      <InfoPaper>
        <TabHeaders tabHeaders={ ["BTC"] }activeTabHeader={ "BTC" } tabHeaderClickHandler={ console.log("hi") }></TabHeaders>
        
        <TabContent>
          <DailyPrediction/>
          <br/>
          <br/>
          <TwoWeekPredictionsGraph/>
          <br/>
          <TwoWeekPredictionsTable/>
        </TabContent>
      </InfoPaper>
    </PredictionsContainer>
  )
}

export default Predictions