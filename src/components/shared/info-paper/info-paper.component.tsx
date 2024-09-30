import "./info-paper.styles.js"
import { InfoPaperContainer } from "./info-paper.styles.js"

// renders a simple paper with children inside
const InfoPaper = ({ children }) => {
  return (
    <InfoPaperContainer>
      { children }
    </InfoPaperContainer>
  )
}

export default InfoPaper