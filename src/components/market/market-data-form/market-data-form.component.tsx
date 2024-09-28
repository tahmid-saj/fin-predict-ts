import { useState } from "react"
import FormInput from "../../shared/media-card/form-input/form-input.component"
import { DropButton } from "../../shared/drop-button/drop-button.styles"
import "./market-data-form.styles"
import { SearchMarketDataContainer, SearchMarketDataForm, SearchMarketDataFormContainer, SearchMarketDataHeader, SearchMarketDataLabel } from "./market-data-form.styles"

const defaultFormFields = {
  category: "",
  ticker: "",
  interval: "",
  startDate: "",
  endDate: ""
}

const MarketDataForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <SearchMarketDataContainer>
      <SearchMarketDataHeader>Search market data</SearchMarketDataHeader>
      <SearchMarketDataForm>

      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <SearchMarketDataFormContainer>
              <DropButton
                required
                className="dropButton"
                name="marketDataInterval"
                id="marketDataInterval"
                onChange={handleChange}
                value={formFields.category}
              >
                <option value="Crypto">Crypto</option>
                <option value="Currencies">Currencies</option>
                <option value="Indices">Indices</option>
                <option value="Stocks">Stocks</option>
              </DropButton>

              <FormInput name="ticker" type="text" value={ formFields.ticker }
                label="Ticker" onChange={ handleChange }/>

              <SearchMarketDataLabel>Interval</SearchMarketDataLabel>
              <DropButton
                required
                className="dropButton"
                name="marketDataInterval"
                id="marketDataInterval"
                onChange={handleChange}
                value={formFields.interval}
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
              <FormInput name="startDate" type="date" value={ formFields.startDate }
                label="Start date" onChange={ handleChange }/>

              <SearchMarketDataLabel>End date</SearchMarketDataLabel>
              <FormInput name="endDate" type="date" value={ formFields.endDate }
                label="End date" onChange={ handleChange }/>
            </SearchMarketDataFormContainer>
          </div>
        </div>
      </div>

          
      </SearchMarketDataForm>
    </SearchMarketDataContainer>
  )
}

export default MarketDataForm