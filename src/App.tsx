import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Navigation } from './routes/navigation/navigation.routes'
import { HomeRoute } from './routes/home/home.routes'

function App() {

  return (
    <Routes>
      <Route path="/" element={ <Navigation/> }>
        <Route index element={ <HomeRoute/> }/>
      </Route>
    </Routes>
  )
}

export default App
