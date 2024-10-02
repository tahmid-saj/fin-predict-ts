import { errorOnGettingDailyPredictionData, errorOnGettingTwoWeekPredictionData } from "../errors/predictions.errors"

export const getDailyPrediction = async (predictionTicker: string): Promise<any> => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL_PREDICTIONS}${import.meta.env.VITE_API_DAILY_PREDICTION}/ticker=${predictionTicker}`, {
      mode: 'no-cors'
    })

    const resJSON = await response.json()
    return resJSON
  } catch (error) {
    console.log(error)
    errorOnGettingDailyPredictionData()
  }
}

export const getTwoWeekPredictions = async (predictionTicker: string): Promise<any> => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL_PREDICTIONS}${import.meta.env.VITE_API_TWO_WEEK_PREDICTIONS}/ticker=${predictionTicker}`, {
      mode: 'no-cors'
    })

    const resJSON = await response.json()
    return resJSON
  } catch (error) {
    console.log(error)
    errorOnGettingTwoWeekPredictionData()
  }
}
