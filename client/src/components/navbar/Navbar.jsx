import React, { useState } from 'react'
import './navbar.css'
import Logo from './logo2.jpg'
import { Link, NavLink } from 'react-router-dom'
import { BackArrow, Menu, ReturnBack } from '../../icons/SvgIcons'
function Navbar() {
  const [close,setClose]=useState(true)
  return (
    <div className={`navbar ${close?'hide--navbar':''}`}>
      <svg onClick={()=>setClose(true)} className='close--navbar--icon' width={'20px'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill='#d7d7d7'><path d="M12.4 18.2c0-.4-.1-.7-.4-.9L7.4 13c-.5-.5-.5-1.4 0-1.9L12 6.8c.3-.2.4-.6.4-.9 0-1.1-1.3-1.7-2.1-.9l-6.8 6.2c-.6.5-.6 1.4 0 1.9l6.8 6.2c.8.5 2.1-.1 2.1-1.1zM20.4 18.2c0-.4-.1-.7-.4-.9L15.4 13c-.5-.5-.5-1.4 0-1.9L20 6.8c.3-.2.4-.6.4-.9 0-1.1-1.3-1.7-2.1-.9l-6.8 6.2c-.6.5-.6 1.4 0 1.9l6.8 6.2c.8.5 2.1-.1 2.1-1.1z"></path></g></svg>
      <Menu width={'20px'} color={'#fff'} className='menu--navbar' onClick={()=>setClose(false)}/>
      <h2>Interior</h2>
      <div className="navbar__image">
        <img src="https://interior-design-website-liard.vercel.app/images/2.jpg" alt="" srcSet="" />
        <h4>Mr. Interior</h4>
      </div>
      <div className="navbar__list">
        <ul>
          <NavLink className={({isActive})=>isActive ? 'list--active' : undefined} to='/'><span >Home</span></NavLink>
          <NavLink className={({isActive})=>isActive ? 'list--active' : undefined} to='/Dashboard'><span >Dashboard</span></NavLink>
          <NavLink className={({isActive})=>isActive ? 'list--active' : undefined} to='/website'><span >Website</span></NavLink>
          <NavLink className={({isActive})=>isActive ? 'list--active' : undefined} to='/tasks'><span >Task</span></NavLink>
          <NavLink className={({isActive})=>isActive ? 'list--active' : undefined} to='/calender'><span>Calender</span> </NavLink>
        </ul>
      </div>
      </div>
  )
}

export default Navbar
