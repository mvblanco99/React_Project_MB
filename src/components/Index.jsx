import React from 'react';
import Header from './Header';
import GeneralFooter from './GeneralFooter'
import '../css/General.css';

const Index = () => {

  const mainStyles = {
    width: '90%',
    margin: '0 auto',
    marginTop: '50px',
  }
  
  const paragraphStyles = {
    color: 'var(--colorFondoAmarillo)'
  };
  
  const backgroundContainer = {
    background : 'var(--colorFondoAmarillo)',
  }

  return (
    <>
      <div className="container" style={backgroundContainer}>
        
        <Header background={backgroundContainer}/>
  
        <main style={mainStyles}>
            <p style={paragraphStyles}>Manuel Blanco</p>
        </main>

        <GeneralFooter background={backgroundContainer}/>

      </div>
    </>
  )
}

export default Index