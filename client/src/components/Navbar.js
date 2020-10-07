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
    <div className='nav justify-content-start'>
      <Nav.Brand>
        <Link className='logo' to='/'><img src={Logo} alt='logo' style={{width: '40px'}}></img></Link>
      </Nav.Brand>
    </div>
      {props.user && <Nav.Brand> <button className='button-current'><Link to="/currentPlan">Current Plan</Link></button> </Nav.Brand>}
      {props.user &&  <Nav.Brand> <Link className='nav' to='/userdashboard' step1={props.step}>{props.user.username}'s profile</Link></Nav.Brand>}
      {props.user ? (
        <>
          <Nav.Brand className='radius'>
            <Link className='nav' to='/' onClick={() => handleLogout(props)}>Logout</Link>
          </Nav.Brand>
        </>
      ) : (
          <>
            <Nav.Brand className='radius'>
              <Link className='nav' to='/signup'>Signup</Link>
            </Nav.Brand>
            <Nav.Brand>
              <Link className='nav' to='/login'>Login</Link>
            </Nav.Brand>
          </>
        )}
    </Nav>
  )
}