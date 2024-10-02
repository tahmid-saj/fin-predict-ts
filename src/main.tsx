import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { MarketDataProvider } from './contexts/market/market.context.tsx'
import { PredictionsProvider } from './contexts/predictor/predictions.context.tsx'
import { ChatbotProvider } from './contexts/chatbot/chatbot.context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MarketDataProvider>
        <PredictionsProvider>
          <ChatbotProvider>
            <App />
          </ChatbotProvider>
        </PredictionsProvider>
      </MarketDataProvider>
    </BrowserRouter>
  </StrictMode>,
)
