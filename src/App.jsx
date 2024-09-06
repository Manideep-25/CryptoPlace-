import React from 'react'
import { Route, Routes } from 'react-router-dom'
//import Footer from './components/Navbar/Footer/Footer.jsx'
import Navbar from './components/Navbar/Navbar'
import Coin from './pages/Coin/Coin.jsx'
import Home from './pages/Home/Home.jsx'
import Companies from './pages/News/Companies.jsx'
import Trending from './pages/Trending/Trending.jsx'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path ='/' element ={<Home/>} />
        <Route path ='/coin/:coinId' element ={<Coin/>} />
        <Route path ='/coin/:coinId' element ={<Coin/>} />
        <Route path ='/trending' element ={<Trending/>} />
        <Route path ='/companies' element ={<Companies/>} />
      </Routes>
    </div>
  )
}

export default App