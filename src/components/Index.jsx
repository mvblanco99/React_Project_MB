import React from 'react';
import Header from './Header';
import GeneralFooter from './GeneralFooter'
import '../css/General.css';
import '../css/ResponsiveIndex.module.css';

const mainStyles = {
  width: '90%',
  margin: '0 auto',
  marginTop: '50px',
  background: 'var(--colorFondoAmarillo)',
}

const paragraphStyles = {
  color: 'var(--colorFondoAmarillo)'
};

const Index = () => {
  return (
    <>
      <div className="container">
        
        <Header/>
  
        <main style={mainStyles}>
            <p style={paragraphStyles}>Manuel Blanco</p>
        </main>

        <GeneralFooter/>

      </div>
    </>
  )
}

export default Index