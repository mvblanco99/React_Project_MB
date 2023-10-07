import React from 'react'
import Header from './Header'
import GeneralFooter from './GeneralFooter'


const Info = () => {
  return (
    <>
        <Header/>

        <main className="main">

            <section className="principal">
    
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
    
            <hr className="separadores"/>

            <section className="correo">
                <p>manuelblanco@gmail.com</p>
            </section>

            <hr className="separadores"/>
    
            <section className="redes">
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
            </section>
    
        </main>

        <GeneralFooter/>
    </>
  )
}

export default Info