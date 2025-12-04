import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './page/Home'
import { About } from './page/About'
import { Contact } from './page/Contact'
import { Faq } from './page/Faq'
import { WhyUs } from './page/WhyUs'
import { EnquireNow } from './page/EnquireNow'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='wrapper'>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/why-us' element={<WhyUs/>}/>
          <Route path='/faq' element={<Faq/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/enquire-now' element={<EnquireNow/>}/>
        </Routes>
      <Footer/>
    </div>
     
    </>
  )
}

export default App
