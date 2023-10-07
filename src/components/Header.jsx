import React from 'react'
import { Link } from 'react-router-dom'
import stylesHeader from '../css/Header.module.css'

const Header = () => {
  return (
    <>  

        <header className={stylesHeader.header_principal}>
            <Link to="/Info" className={stylesHeader.info}>INFO</Link>
            <Link to="/Portfolio" className={stylesHeader.link_portfolio}>PORTFOLIO</Link>
        </header>
    </>
  )
}

export default Header