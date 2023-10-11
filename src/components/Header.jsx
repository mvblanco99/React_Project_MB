import React from 'react'
import { Link } from 'react-router-dom'
import stylesHeader from '../css/Header.module.css'

const Header = ({backgroundHeader,displayLinkPortfolio,name_route,route}) => {

  return (
    <>  
        <header className={stylesHeader.header_principal} style={backgroundHeader}>
            
            <Link 
              to={route.first_route} 
              className={stylesHeader.info}>
                {name_route.first_name_route}
              </Link>

            <Link 
              to={route.second_route} 
              className={stylesHeader.link_portfolio} 
              style={displayLinkPortfolio}>
                {name_route.second_name_route.toUpperCase()}
            </Link>

        </header>
    </>
  )
}

export default Header