import { MarketDataQuery } from "../../contexts/market/market.types";

// market data validation functions

export const validateMarketDataQuery = (marketDataQuery: MarketDataQuery): boolean => {
  // validating if startDate > endDate
  if (marketDataQuery.marketDataStartDate && marketDataQuery.marketDataEndDate &&
    marketDataQuery.marketDataStartDate > marketDataQuery.marketDataEndDate
  ) {
    return false
  }

  return true
}