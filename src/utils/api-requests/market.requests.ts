import { MarketDataQuery } from "../../contexts/market/market.types";
import { errorOnGetCryptoMarketData, errorOnGetForexMarketData, errorOnGetIndicesMarketData, errorOnGetStocksMarketData } from "../errors/market.errors";

// stocks
export async function getStockMarketData(marketDataQuery: MarketDataQuery): Promise<any> {
  try {
    const response = await fetch(`${import.meta.env.REACT_APP_API_URL_MARKET_DATA}${import.meta.env.REACT_APP_API_URL_MARKET_DATA_STOCKS}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(marketDataQuery)
    })

    const resMarketData = await response.json()

    return resMarketData
  } catch (error) {
    console.log(error)
    errorOnGetStocksMarketData()
  }
}

// indices
export async function getIndicesMarketData(marketDataQuery: MarketDataQuery): Promise<any> {
  try {
    const response = await fetch(`${import.meta.env.REACT_APP_API_URL_MARKET_DATA}${import.meta.env.REACT_APP_API_URL_MARKET_DATA_INDICES}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(marketDataQuery)
    })

    const resMarketData = await response.json()

    return resMarketData
  } catch (error) {
    console.log(error)
    errorOnGetIndicesMarketData()
  }
}

// stocks
export async function getCryptoMarketData(marketDataQuery: MarketDataQuery): Promise<any> {
  try {
    const response = await fetch(`${import.meta.env.REACT_APP_API_URL_MARKET_DATA}${import.meta.env.REACT_APP_API_URL_MARKET_DATA_CRYPTO}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(marketDataQuery)
    })

    const resMarketData = await response.json()

    return resMarketData
  } catch (error) {
    console.log(error)
    errorOnGetCryptoMarketData()
  }
}

// stocks
export async function getForexMarketData(marketDataQuery: MarketDataQuery): Promise<any> {
  try {
    const response = await fetch(`${import.meta.env.REACT_APP_API_URL_MARKET_DATA}${import.meta.env.REACT_APP_API_URL_MARKET_DATA_FOREX}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(marketDataQuery)
    })

    const resMarketData = await response.json()

    return resMarketData
  } catch (error) {
    console.log(error)
    errorOnGetForexMarketData()
  }
}