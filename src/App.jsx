import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Homepage from './Pages/Homepage/Homepage'
import SeeAllCitiesPage from './Pages/SeeAllCitiesPage/SeeAllCitiesPage'
import ScrollToTop from './Contexts/ScrollToTop'
import CityDetailsPage from './Pages/CityDetailsPage/CityDetailsPage';
import HomeDetailsPage from './Pages/HomeDetailsPage/HomeDetailsPage'

function App() {


  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Routes>
      
      <Route path='/' element={<Homepage/>}/>
      <Route path='/seeallcities' element={<SeeAllCitiesPage/>}/>
      <Route path='/properties/city/:cityId' element={<CityDetailsPage/>}/>
      <Route path='/properties/:propertyId' element={<HomeDetailsPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
