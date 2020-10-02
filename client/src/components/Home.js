import React from 'react';
import HomeImage from '../assets/images/home-background.jpg';
//import {} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Home.css';


export default function Home(props) {
  return (
    <div className='background-image'>
      <p>MIND MUSCLE CONNECTION</p>
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