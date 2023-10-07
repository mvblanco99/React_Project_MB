import React from 'react'
import Header from './Header'
import FooterProjectScreen from './FooterProjectScreen'
import Technologies from './Technologies'


const Project = () => {
  return (
    <>
        <Header/>

        <section className="container-name">
            <h2 className="name-project">PROJECTS  <i className="fa-solid fa-arrow-right"></i>  AGRIMANAGER</h2>
        </section>

        <main className="main">
                
            <Technologies/>

            <section className="description-project">
                <p>
                    Infrapedia is an open source project available on Github, with the most complete, 
                    versalite-interactive infrastructure map of the internet. It allows engineers, carriers, 
                    data center operators, business development executive and other stakeholders to navigate 
                    the Internet's collection of networks and data centers.
                </p>
            </section>

            <div className="container-section">

                <section className="development-description">
                    <p>/* Designed and develop mobile oriented desings
                        for a more concise and easy-to-use UI, allowing
                        the user to have a better experience */</p>
                </section>

                <section className="cover-img">
                    
                    <div className="container-img">
                        <img src="images/proyecto1.webp" alt="proyecto1"/>
                    </div>

                </section>

                <section className="images-project">
                    
                    <div className="container-img">
                        <img src="images/proyecto1.webp" alt="proyecto1"/>
                    </div>

                    <div className="container-img">
                        <img src="images/proyecto1.webp" alt="proyecto1"/>
                    </div>

                    <div className="container-img">
                        <img src="images/proyecto1.webp" alt="proyecto1"/>
                    </div>

                    <div className="container-img">
                        <img src="images/proyecto1.webp" alt="proyecto1"/>
                    </div>

                    <div className="container-img">
                        <img src="images/proyecto1.webp" alt="proyecto1"/>
                    </div>

                    <div className="container-img">
                        <img src="images/proyecto1.webp" alt="proyecto1"/>
                    </div>

                    <div className="container-img">
                        <img src="images/proyecto1.webp" alt="proyecto1"/>
                    </div>

                    <div className="container-img">
                        <img src="images/proyecto1.webp" alt="proyecto1"/>
                    </div>

                </section>

                <section className="about">
                    <p>&lt;This included thinking more about atomic desings,
                        allowing to reuse components across the entire UI,
                        reducing considerably build time and also final bundle
                        size&gt;</p>
                </section>

                <section className="unsuccessful">
                    <div className="container-img">
                        <img src="images/proyecto2.jpg" alt="proyecto2"/>
                    </div>
                </section>
            </div>

        </main>

        <FooterProjectScreen/>
    </>
  )
}

export default Project