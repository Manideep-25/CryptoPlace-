import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { CoinContext } from '../../context/CoinContext.jsx'
import './Navbar.css'

const Navbar = () => {

  const {setCurrency} = useContext(CoinContext);

  const currencyHandler = (e) =>{
    switch(e.target.value){
      case "usd":{
        setCurrency({
          name: "usd" , symbol:"$"
        });
        break;
      }

      case "eur":{
        setCurrency({
          name: "eur" , symbol:"€"
        });
        break;
      }

      case "inr":{
        setCurrency({
          name: "inr" , symbol:"₹"
        });
        break;
      }
      default:{
        setCurrency({
          name:"usd", symbol: "$"
        })
        break;
      }
    }
  }

  return (
    <div className='navbar'>
      <Link to = {'/'}><img src={logo} alt = ""/></Link>
      <ul>
        <Link to ={'/'} ><li>Home</li></Link>
        <Link to ={'/Trending'} ><li>Trending</li></Link>
        <Link to ={'/Companies'} ><li>Companies</li></Link>
      </ul>
      <div className='nav-right'>
          <select onChange = {currencyHandler}>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="inr">INR</option>
          </select>
      </div>
    </div>
  )
}

export default Navbar