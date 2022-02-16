import React, { Component } from 'react'
import './Navbar.css'
import logo from './assets/images/logo.png'
import facebook from './assets/images/facebook.png'
import twitter from './assets/images/twitter.png'
import instagram from './assets/images/instagram.png'
import yt from './assets/images/yt.png'

export class Navbar extends Component {
  render() {
    return (
          <nav className='navbar'>
        <div className='logo'>
            <img src={logo}/>
        </div>
              <div className='right__side'>
             <ul className='navbar__text'>
                 <li> About us</li>
                 <li>Contact</li>             
             </ul>
             <ul className='social__media'>
                 <li><img src={facebook}/></li>
                 <li><img src={twitter}/></li>
                 <li><img src={instagram}/></li>
                 <li><img src={yt}/></li>
             </ul>
             </div>
          </nav>
    )
  }
}

export default Navbar