import { useContext, useState } from "react"
import FormInput from "../../shared/form-input/form-input.component"
import { DropButton } from "../../shared/drop-button/drop-button.styles"
import "./market-data-form.styles"
import { SearchMarketDataContainer, SearchMarketDataForm, SearchMarketDataFormContainer, 
  SearchMarketDataHeader, SearchMarketDataLabel, SearchMarketDataFormButtons } from "./market-data-form.styles"
import Button from "../../shared/button/button.component"
import { MarketDataContext } from "../../../contexts/market/market.context"

const initialFormFields = {
  marketDataType: "Stocks",
  marketDataTicker: "AAPL",
  marketDataInterval: "Day",
  marketDataStartDate: "",
  marketDataEndDate: ""
}

const defaultFormFields = {
  marketDataType: "",
  marketDataTicker: "",
  marketDataInterval: "",
  marketDataStartDate: "",
  marketDataEndDate: ""
}

const MarketDataForm = () => {
  const [formFields, setFormFields] = useState(initialFormFields)
  const { searchMarketData } = useContext(MarketDataContext)

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (
      formFields.marketDataType === "" ||
      formFields.marketDataTicker === "" ||
      formFields.marketDataInterval === "" ||
      formFields.marketDataStartDate === "" ||
      formFields.marketDataEndDate === ""
    ) {
      return;
    }

    searchMarketData(formFields)

    resetFormFields()
  }

  return (
    <SearchMarketDataContainer>
      <SearchMarketDataHeader>Search market data</SearchMarketDataHeader>
      <SearchMarketDataForm onSubmit={ handleSubmit }>

      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <SearchMarketDataFormContainer>
              <DropButton
                required
                className="dropButton"
                name="marketDataType"
                id="marketDataType"
                onChange={handleChange}
                value={formFields.marketDataType}
              >
                <option value="Crypto">Crypto</option>
                <option value="Currencies">Currencies</option>
                <option value="Indices">Indices</option>
                <option value="Stocks">Stocks</option>
              </DropButton>

              <FormInput name="marketDataTicker" type="text" value={ formFields.marketDataTicker }
                label="Ticker" onChange={ handleChange }/>

              <SearchMarketDataLabel>Interval</SearchMarketDataLabel>

              <DropButton
                required
                className="dropButton"
                name="marketDataInterval"
                id="marketDataInterval"
                onChange={handleChange}
                value={formFields.marketDataInterval}
              >
                <option value="Hour">Hour</option>
                <option value="Day">Day</option>
                <option value="Week">Week</option>
                <option value="Month">Month</option>
              </DropButton>
            </SearchMarketDataFormContainer>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6">
            <SearchMarketDataFormContainer>
              <SearchMarketDataLabel>Start date</SearchMarketDataLabel>
              <FormInput name="marketDataStartDate" type="date" value={ formFields.marketDataStartDate }
                label="Start date" onChange={ handleChange }/>

              <SearchMarketDataLabel>End date</SearchMarketDataLabel>
              <FormInput name="marketDataEndDate" type="date" value={ formFields.marketDataEndDate }
                label="End date" onChange={ handleChange }/>
            </SearchMarketDataFormContainer>
          </div>
        </div>

        <div className="row">
          <SearchMarketDataFormButtons>
            <Button type="submit">Search</Button>
            <Button type="button" onClick={ resetFormFields }>Clear</Button>
          </SearchMarketDataFormButtons>
        </div>
      </div>

      </SearchMarketDataForm>
    </SearchMarketDataContainer>
  )
}

export default MarketDataForm