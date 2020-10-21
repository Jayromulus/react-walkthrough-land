import React from 'react'
import './Navbar.css'
import spanishFoodPic from '../../assets/spanishcuisine1.jpg'
import Logout from './Logout/Logout'

// function Navbar() {}
const Navbar = (props) => {
  return(
    <div>
      <nav>
        <img id="spanishFoodPic" src={spanishFoodPic} alt="spanishFood" />
        <Logout />
      </nav>
    </div>
  )
}

export default Navbar