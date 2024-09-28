import styled from "styled-components";
import { COLOR_CODES } from "../../../utils/constants/shared.constants";

export const SearchMarketDataContainer = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR_CODES.shared[0]};
  border-radius: 0.5rem;
  box-shadow: 5px 5px #000000;
`

export const SearchMarketDataForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
`

export const SearchMarketDataHeader = styled.h2`
  color: ${COLOR_CODES.text[0]};
  margin: 2%;
  padding: 3%;
`

export const SearchMarketDataLabel = styled.p`
  color: ${COLOR_CODES.text[0]};
`

export const SearchMarketDataFormContainer = styled.div`
  padding: 4%;
  width: 400px;
`

export const SearchMarketDataFormButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`