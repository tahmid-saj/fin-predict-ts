import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Navigation } from './routes/navigation/navigation.routes'
import { HomeRoute } from './routes/home/home.routes'
import Market from './pages/market/market.pages'

function App() {

  return (
    <Routes>
      <Route path="/" element={ <Navigation/> }>
        <Route index element={ <HomeRoute/> }/>
        <Route path="/market" element={ <Market/> }/>
      </Route>
    </Routes>
  )
}

export default App
