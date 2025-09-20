import react from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddList from './components/AddList';
import Nest from './components/Nest';
import Home from './pages/Home';
import About from './pages/About';
import Property from './pages/Property';
import Pages from './pages/Pages';
import News from './pages/News';
import Contact from './pages/Contact';
import HomeStyle01 from './components/HomeStyle01';
import HomeStyle02 from './components/HomeStyle02';
import HomeStyle03 from './components/HomeStyle03';
import HomeStyle04 from './components/HomeStyle04';
import HomeStyle05 from './components/HomeStyle05';
import HomeStyle06 from './components/HomeStyle06';
import HomeStyle07 from './components/HomeStyle07';
import HomeStyle08 from './components/HomeStyle08';
import HomeStyle09 from './components/HomeStyle09';
import PropertyDetails from './components/PropertyDetails';
import NewDetail from './components/NewDetail';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/nest' element={<Nest />} />
        <Route path='/addlist' element={<AddList />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/property' element={<Property />} />
        <Route path='/news' element={<News />} />
        <Route path='/pages' element={<Pages />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/homestyle01' element={<HomeStyle01 />} />
        <Route path='/homestyle02' element={<HomeStyle02 />} />
        <Route path='/homestyle03' element={<HomeStyle03 />} />
        <Route path='/homestyle04' element={<HomeStyle04 />} />
        <Route path='/homestyle05' element={<HomeStyle05 />} />
        <Route path='/homestyle06' element={<HomeStyle06 />} />
        <Route path='/homestyle07' element={<HomeStyle07 />} />
        <Route path='/homestyle08' element={<HomeStyle08 />} />
        <Route path='/homestyle09' element={<HomeStyle09 />} />
        <Route path='/propertydetails' element={<PropertyDetails />} />
        <Route path='/newdetail' element={<NewDetail />} />
        
      </Routes>
    </BrowserRouter>

  )
}

export default App
