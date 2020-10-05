import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar as Nav } from 'react-bootstrap';
import { logout } from '../services/auth';
import Logo from '../assets/images/logo.png'
import './Navbar.css';


const handleLogout = props => {
  logout().then(() => {
    props.setUser(null);
  })
}

export default function Navbar(props) {
  return (
    <Nav className='nav justify-content-end' bg='dark'>
    <div className='home-link nav justify-content-start'>
      <Nav.Brand>
        <Link style={{marginLeft: '-50px'}} to='/' style={{width: '50px'}}><img src={Logo} alt='logo' style={{width: '40px'}}></img></Link>
      </Nav.Brand>
    </div>
      {props.user &&  <Nav.Brand> <Link to='/userdashboard'>{props.user.username}'s profile</Link></Nav.Brand>}
      {props.user ? (
        <>
          <Nav.Brand>
            <Link to='/' onClick={() => handleLogout(props)}>Logout</Link>
          </Nav.Brand>
        </>
      ) : (
          <>
            <Nav.Brand>
              <Link to='/signup'>Signup</Link>
            </Nav.Brand>
            <Nav.Brand>
              <Link to='/login'>Login</Link>
            </Nav.Brand>
          </>
        )}
    </Nav>
  )
}