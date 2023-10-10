
import Header from './Header';
import GeneralFooter from './GeneralFooter'
import '../css/General.css';
import "../css/Index.css"

const Index = () => {

  
  const shadowValues = [];

  

  for (let i = 1; i <= 20; i++) {
    const offsetX = `0`;
    const offsetY = `${i*i*2}px`;
    const color = '#000000';

    shadowValues.push({ offsetX, offsetY, blur, color });
  }

  
    
  
  

  return (
    <>
      <div className= "container index-container" >
        
        <Header  name_route='INFO' route='./Info'/>
  
        <main className = "Index-main" >
            <p className='Index-p' >Manuel Blanco</p>
        </main>

        <GeneralFooter />

      </div>
    </>
  )
}

export default Index