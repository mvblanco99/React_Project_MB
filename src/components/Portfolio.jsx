import Header from './Header'
import GeneralFooter from './GeneralFooter'
import stylesPortfolio from '../css/Portfolio.module.css'
import "../css/General.css"
import { Link } from 'react-router-dom'
import { RoutesContext } from '../context/RoutesContext'
import { useContext } from 'react'

const Portfolio = () => {

    const {routes, nameRoutes} = useContext(RoutesContext)

    const backgroundFooter = {
        background : 'transparent'
    }

    const colorDecoracion = {
        backgroundColor : '#FFFFFF',
    }

    const backgroundHeader = {
        backgroundColor : '#FFFFFF',
        borderBottom: '1px solid black'
    }

    const displayLinkPortfolio = {
        display : 'none'
    }

  return (
    <>
        <div className={stylesPortfolio.container}>
            
            <Header background={backgroundHeader} display={displayLinkPortfolio} name_route={nameRoutes.close} route={routes.home}/>

            <main className={stylesPortfolio.main}>

                <div className={stylesPortfolio.project}>
                    <div className={stylesPortfolio.data}>
                        <h2 className={stylesPortfolio.name_project}><Link to="/Project">AGRIMANAGER</Link></h2>
                        <p className={stylesPortfolio.type_work}></p>
                    </div>
                    <div className={stylesPortfolio.technologies}>
                        <ul>
                            <li>VUE</li>
                            <li>NUXT</li>
                            <li>REDUX</li>
                            <li>SASS</li>
                            <li>TYPESCRIPT</li>
                            <li>REACT</li>
                            <li>VANILLA JAVASCRIPT</li>
                        </ul>
                    </div>
                </div>

                <div className={stylesPortfolio.project}>
                    
                <div className={stylesPortfolio.data}>
                        <h2 className={stylesPortfolio.name_project}>INFRAPEDIA</h2>
                        <p className={stylesPortfolio.type_work}></p>
                    </div>
                    
                    <div className={stylesPortfolio.technologies}>
                        <ul>
                            <li>VUE</li>
                            <li>SASS</li>
                            <li>VUEX</li>
                            <li>VANILLA JAVASCRIPT</li>
                            <li>TAILWINDCSS</li>
                        </ul>
                    </div>
                </div>

                <div className={stylesPortfolio.project}>
                    <div className={stylesPortfolio.data}>
                        <h2 className={stylesPortfolio.name_project}>KOMERCIA</h2>
                        <p className={stylesPortfolio.type_work}>freelance</p>
                    </div>
                    <div className={stylesPortfolio.technologies}>
                        <ul>
                            <li>VUE</li>
                            <li>VUEX</li>
                            <li>VANILLA JAVASCRIPT</li>
                            <li>TAILWINDCSS</li>
                        </ul>
                    </div>
                </div>

                <div className={stylesPortfolio.project}>
                <div className={stylesPortfolio.data}>
                        <h2 className={stylesPortfolio.name_project}>SERACERA</h2>
                        <p className={stylesPortfolio.type_work}>freelance</p>
                    </div>
                    <div className={stylesPortfolio.technologies}>
                        <ul>
                            <li>WORDPRESS</li>
                            <li>ECOMMERCE</li>
                        </ul>
                    </div>
                </div>

                <div className={stylesPortfolio.project}>
                <div className={stylesPortfolio.data}>
                        <h2 className={stylesPortfolio.name_project}>AGRIMANAGER V2.0</h2>
                        <p className={stylesPortfolio.type_work}></p>
                    </div>
                    <div className={stylesPortfolio.technologies}>
                        <ul>
                            <li>REDUX</li>
                            <li>REACT</li>
                            <li>MICROFRONTENDS WITH WEBPACK</li>
                            <li>VANILLA JAVASCRIPT</li>
                            <li>TAILWINDCSS</li>
                        </ul>
                    </div>
                </div>
                

            </main>

            <GeneralFooter background={backgroundFooter} colorDecoracion={colorDecoracion}/>

        </div>
        
    </>
  )
}

export default Portfolio