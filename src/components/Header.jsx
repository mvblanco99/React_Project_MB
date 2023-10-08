import React from 'react'
import { Link } from 'react-router-dom'
import stylesHeader from '../css/Header.module.css'

const Header = ({background,display}) => {
  return (
    <>  
        <header className={stylesHeader.header_principal} style={background}>
            <Link to="/Info" className={stylesHeader.info}>INFO</Link>
            <Link to="/Portfolio" className={stylesHeader.link_portfolio} style={display}>PORTFOLIO</Link>
        </header>
    </>
  )
}

export default Header