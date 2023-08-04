import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './Pages/Homepage/Homepage'
import SeeAllCitiesPage from './Pages/SeeAllCitiesPage/SeeAllCitiesPage'
import ScrollToTop from './Contexts/ScrollToTop'

function App() {


  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Routes>
      
      <Route path='/' element={<Homepage/>}/>
      <Route path='/seeallcities' element={<SeeAllCitiesPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
