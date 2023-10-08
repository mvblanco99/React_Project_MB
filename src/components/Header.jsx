import React from 'react'
import { Link } from 'react-router-dom'
import stylesHeader from '../css/Header.module.css'

const Header = ({background,display,name_route,route}) => {

  return (
    <>  
        <header className={stylesHeader.header_principal} style={background}>
            <Link to={route} className={stylesHeader.info}>{name_route}</Link>
            <Link to="/Portfolio" className={stylesHeader.link_portfolio} style={display}>PORTFOLIO</Link>
        </header>
    </>
  )
}

export default Header