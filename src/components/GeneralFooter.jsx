import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import stylesGeneralFooter from '../css/GeneralFooter.module.css'
import RoutesContext from '../context/RoutesContext'

const GeneralFooter = ({backgroundFooter, colorDecoracion}) => {
  
    const {nameRoutes, routes} = useContext(RoutesContext);

    return (
        <>
            <footer className={stylesGeneralFooter.footer} style={backgroundFooter}>
                <div className={stylesGeneralFooter.container_header_secundario}>
                    <header className={stylesGeneralFooter.header_secundario}>
                        <Link to={routes.portfolio}>{nameRoutes.portfolio.toUpperCase()}</Link>
                    </header>
                </div>

                <div className={stylesGeneralFooter.contenedor_decoracion}>
                    <div className={stylesGeneralFooter.decoracion} style={colorDecoracion}></div>
                </div>
            </footer>
        </>
  )
}

export default GeneralFooter