import "./daily-prediction.styles"
import { DailyPredictionContainer, DailyPredictionHeader } from "./daily-prediction.styles"

const DailyPrediction = () => {
  return (
    <DailyPredictionContainer>
      <DailyPredictionHeader>
        Prediction Date - 2024-09-30
      </DailyPredictionHeader>
      <DailyPredictionHeader>
        Prediction Price - 3000
      </DailyPredictionHeader>
    </DailyPredictionContainer>
  )
}

export default DailyPrediction