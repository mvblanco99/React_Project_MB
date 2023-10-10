import React, { useContext } from 'react'
import Header from './Header'
import GeneralFooter from './GeneralFooter'
import stylesInfo from '../css/Info.module.css'
import "../css/General.css"
import { RoutesContext } from '../context/RoutesContext'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Info = () => {

    const {routes, nameRoutes} = useContext(RoutesContext)
  
    const backgroundContainer = {
        background : 'var(--colorFondoBlanco)',
    }

    const backgroundHeader = {
        background : 'var(--colorFondoBlanco)',
        borderBottom: '1px solid black'
    }

    return (
    <>
        <div style={backgroundContainer}>

            <Header background={backgroundHeader} name_route={nameRoutes.close} route={routes.home}/>

            <main className={stylesInfo.main}>

                <section className={stylesInfo.principal}>

                    <p>Hello and welcome to my website. My name is Manuel Blanco, and
                        i am a programmer based in Bogota, Colombia.
                    </p>

                    <p>With a strong interest in technology and culture, i work on a variety of 
                        self-commissioned projects as well as for various clients to help
                        them transform their ideas into visual worlds.
                    </p>

                    <p>If you would like to work or get in touch with me, please don't
                        hesitate to send me an email:&rpar;
                    </p>
                </section>

                <hr className={stylesInfo.separadores}/>

                <section className={stylesInfo.correo}>
                    <p>manuelblanco@gmail.com</p>
                </section>

                <hr className={stylesInfo.separadores}/>

                <section className={stylesInfo.redes}>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                </section>

            </main>

            <GeneralFooter background={backgroundContainer}/>
        </div>
    </>
  )
}

export default Info