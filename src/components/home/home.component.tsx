import { NAV_LINKS } from "../../utils/constants/shared.constants"
import MediaCard from "../shared/media-card/media-card.component"
import "./home.styles"
import { HomeContainer } from "./home.styles"

const cardStyles: any = {
  width: 360,
  height: 450,
  marginBottom: "6%"
}

const Home = () => {
  const homeCardContent: any = {
    marketData: {
      header: "Market data",
      description: "Get current and historical market data on stocks, indices, crypto and foreign exchange.",
      imageUrl: "https://static.vecteezy.com/system/resources/previews/014/563/665/original/investment-forecast-or-prediction-vision-to-see-investing-opportunity-future-profit-from-stock-and-crypto-trading-concept-flat-modern-illustration-vector.jpg",
      path: NAV_LINKS.paths.marketData
    },
    predictions: {
      header: "Predictions",
      description: "Bitcoin and stock predictions to inform of any potential investment opportunities or downfalls.",
      imageUrl: "https://media.istockphoto.com/id/1189915287/vector/business-team-and-successful-financial-strategy.jpg?s=612x612&w=0&k=20&c=bk1TpF1dhIQ2znV_0veCQ6yY-QSud0m7-CzE6GCJ5QQ=",
      path: NAV_LINKS.paths.predictions
    },
    chatbot: {
      header: "Chatbot",
      description: "Provide your financial concerns and ask for suggestions from our chatbot.",
      imageUrl: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/334804806/original/793cad2ae511c4c9b30c1d5e8206b8eb8ab21087/create-a-ai-chat-bot-embedded-website-for-you.png",
      path: NAV_LINKS.paths.chatbot
    },
    advice: {
      header: "Advice",
      description: "Receive weekly financial advice depending on the current economy and market.",
      imageUrl: "https://media.istockphoto.com/id/1161246760/vector/company-strategy-planning-business-data-analysis-business-educational-concept-digital.jpg?s=612x612&w=0&k=20&c=HcfgXYM9TpaBDHohGjDkuOcrDlwpbj_6h-n0RGNtgpw=",
      path: NAV_LINKS.paths.advice
    },
  }

  return (
    <div className="container">
      <HomeContainer>
        <div className="row justify-content-center align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <MediaCard styles={ cardStyles } header={ homeCardContent.marketData.header } imageUrl={ homeCardContent.marketData.imageUrl }
              imageTitle={ homeCardContent.marketData.header } path={ homeCardContent.marketData.path } content={ homeCardContent.marketData.description }></MediaCard>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6">
            <MediaCard styles={ cardStyles } header={ homeCardContent.predictions.header } imageUrl={ homeCardContent.predictions.imageUrl }
              imageTitle={ homeCardContent.predictions.header } path={ homeCardContent.predictions.path } content={ homeCardContent.predictions.description }></MediaCard>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6">
            <MediaCard styles={ cardStyles } header={ homeCardContent.chatbot.header } imageUrl={ homeCardContent.chatbot.imageUrl }
              imageTitle={ homeCardContent.chatbot.header } path={ homeCardContent.chatbot.path } content={ homeCardContent.chatbot.description }></MediaCard>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6">
            <MediaCard styles={ cardStyles } header={ homeCardContent.advice.header } imageUrl={ homeCardContent.advice.imageUrl }
              imageTitle={ homeCardContent.advice.header } path={ homeCardContent.advice.path } content={ homeCardContent.advice.description }></MediaCard>
          </div>
        </div>
      </HomeContainer>
    </div>
  )
}

export default Home