import React from 'react'
import { Link } from 'react-router-dom'
import stylesGeneralFooter from '../css/GeneralFooter.module.css'

const GeneralFooter = () => {
  return (
    <>
        <footer className={stylesGeneralFooter.footer}>
            <div className={stylesGeneralFooter.container_header_secundario}>
                <header className={stylesGeneralFooter.header_secundario}>
                    <Link to="Portfolio">PORTFOLIO</Link>
                </header>
            </div>

            <div className={stylesGeneralFooter.contenedor_decoracion}>
                <div className={stylesGeneralFooter.decoracion}></div>
            </div>
        </footer>
    </>
  )
}

export default GeneralFooter