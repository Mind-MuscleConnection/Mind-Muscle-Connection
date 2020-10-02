import React from 'react';
import HomeImage from '../assets/images/home-background.jpg';
import {Container, Row, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Home.css';


export default function Home() {
  return (
    <>
      <p>MIND MUSCLE CONNECTION</p>
      <img src={HomeImage} alt='background' style={{heigth: "100vh", width: "100vw"}}></img>
      <button className='button'><Link to='/signup'>Join us!</Link></button>
      <Link to='/about'>About us</Link>
      <Link to='/how-it-works'>How it works</Link>
    </>
  )
}