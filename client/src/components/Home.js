import React from 'react';
import HomeImage from '../assets/images/home-background.jpg';
import {Link} from 'react-router-dom';
import './Home.css';
import Logo from '../assets/images/logo.png'


export default function Home(props) {
  return (
    <div className='background-image'>
      <h1><img src={Logo} alt='logo' style={{width:'60px', marginRight:'15px'}}></img>MIND MUSCLE CONNECTION<img src={Logo} alt='logo' style={{width:'60px', marginLeft:'15px'}}></img></h1>
      {props.user ? (
        <>
          <Link to='/userdashboard'><button className='classname'>Get started!</button></Link>
        </>
      ) : (
          <>
    <Link to='/signup'><button className='classname'>Join us!</button></Link>
          </>
        )}
   <div className='footer'>
      <Link to='/about' className='about'>About us</Link> | <Link to='/how-it-works' className='how-it-works'>How it works</Link>
    </div>
    </div>
  )
}