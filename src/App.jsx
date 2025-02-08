import React from 'react'
import Home from './pages/Home'
import "./assets/scss/main.scss";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import PageNotFound from './pages/PageNotFound';
import ContactUs from './pages/ContactUs';
import OurTeam from './pages/OurTeam';
import PublicationsPage from './pages/Publications';
import PracticeArea from './pages/PracticeArea';
import OurServices from './pages/OurServices';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/practicearea' element={<PracticeArea />} />
          <Route path='/publication' element={<PublicationsPage />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/team' element={<OurTeam />} />
          <Route path='/service' element={<OurServices />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App;