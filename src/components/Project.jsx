import React from 'react'
import Header from './Header'
import FooterProjectScreen from './FooterProjectScreen'
import Technologies from './Technologies'
import stylesProject from '../css/Project.module.css'
import '../css/General.css'
import imagen from '../assets/images/proyecto1.webp'
import imagen2 from '../assets/images/proyecto2.jpg'

const Project = () => {
  
    const backgroundContainer = {
        background : 'var(--colorFondoBlanco)',
    }
  
    return (
    <>
        <div className={stylesProject.container}>
            
            <Header background={backgroundContainer}/>

            <section className={stylesProject.container_name}>
                <h2 className={stylesProject.name_project}>PROJECTS  <i className="fa-solid fa-arrow-right"></i>  AGRIMANAGER</h2>
            </section>

            <main className={stylesProject.main}>
                    
                <Technologies/>

                <section className={stylesProject.description_project}>
                    <p>
                        Infrapedia is an open source project available on Github, with the most complete, 
                        versalite-interactive infrastructure map of the internet. It allows engineers, carriers, 
                        data center operators, business development executive and other stakeholders to navigate 
                        the Internet's collection of networks and data centers.
                    </p>
                </section>

                <div className={stylesProject.container_section}>

                    <section className={stylesProject.development_description}>
                        <p>/* Designed and develop mobile oriented desings
                            for a more concise and easy-to-use UI, allowing
                            the user to have a better experience */</p>
                    </section>

                    <section className={stylesProject.cover_img}>
                        
                        <div className={stylesProject.container_img}>
                            <img src={imagen} alt="proyecto1"/>
                        </div>

                    </section>

                    <section className={stylesProject.images_project}>
                        
                        <div className={stylesProject.container_img}>
                            <img src={imagen} alt="proyecto1"/>
                        </div>

                        <div className={stylesProject.container_img}>
                            <img src={imagen} alt="proyecto1"/>
                        </div>

                        <div className={stylesProject.container_img}>
                            <img src={imagen} alt="proyecto1"/>
                        </div>

                        <div className={stylesProject.container_img}>
                            <img src={imagen} alt="proyecto1"/>
                        </div>

                        <div className={stylesProject.container_img}>
                            <img src={imagen} alt="proyecto1"/>
                        </div>

                        <div className={stylesProject.container_img}>
                            <img src={imagen} alt="proyecto1"/>
                        </div>

                        <div className={stylesProject.container_img}>
                            <img src={imagen} alt="proyecto1"/>
                        </div>

                        <div className={stylesProject.container_img}>
                            <img src={imagen} alt="proyecto1"/>
                        </div>

                    </section>
                    <section className={stylesProject.about}>
                        <p>&lt;This included thinking more about atomic desings,
                            allowing to reuse components across the entire UI,
                            reducing considerably build time and also final bundle
                            size&gt;</p>
                    </section>

                    <section className={stylesProject.unsuccessful}>
                        <div className={stylesProject.container_img}>
                            <img src={imagen2} alt="proyecto2"/>
                        </div>
                    </section>
                </div>

            </main>

            <FooterProjectScreen/>
        </div>
        
    </>
  )
}

export default Project