import React from 'react'
import { Link } from 'react-router-dom'
import stylesGeneralFooter from '../css/GeneralFooter.module.css'

const GeneralFooter = ({background, colorDecoracion}) => {
  
    return (
        <>
            <footer className={stylesGeneralFooter.footer} style={background}>
                <div className={stylesGeneralFooter.container_header_secundario}>
                    <header className={stylesGeneralFooter.header_secundario}>
                        <Link to="/Portfolio">PORTFOLIO</Link>
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