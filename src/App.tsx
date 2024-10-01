import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Navigation } from './routes/navigation/navigation.routes'
import { HomeRoute } from './routes/home/home.routes'
import PredictionsRoute from './routes/predictor/predictions.routes'
import MarketRoute from './routes/market/market.routes'
import ChatbotRoute from './routes/chatbot/chatbot.routes'
import AdviceRoute from './routes/advice/advice.routes'

function App() {

  return (
    <Routes>
      <Route path="/" element={ <Navigation/> }>
        <Route index element={ <HomeRoute/> }/>
        <Route path="/market" element={ <MarketRoute/> }/>
        <Route path="/predictions" element={ <PredictionsRoute/> }/>
        <Route path="/chatbot" element={ <ChatbotRoute/> }/>
        <Route path="/advice" element={ <AdviceRoute/> }/>
      </Route>
    </Routes>
  )
}

export default App
