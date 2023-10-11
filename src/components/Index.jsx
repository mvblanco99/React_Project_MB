import { useContext } from 'react';
import Header from './Header';
import GeneralFooter from './GeneralFooter'
import { RoutesContext } from '../context/RoutesContext';
import { direccionamiento } from '../helpers/direccionamiento_rutas';
import "../css/Index.css"

const Index = () => {

  const {routes, nameRoutes} = useContext(RoutesContext)
  const { route, name_route } = direccionamiento('index', routes, nameRoutes);

  const shadowValues = [];

  for (let i = 1; i <= 20; i++) {
    const offsetX = `0`;
    const offsetY = `${i*i*2}px`;
    const color = '#000000';

    shadowValues.push({ offsetX, offsetY, color });
  }

  return (
    <>
      <div className= "container index-container" >
      
        <Header name_route={name_route} route={route}/>
        
        <main className = "Index-main" >
            <p className='Index-p'>Manuel Blanco</p>
        </main>

        <GeneralFooter />

      </div>
    </>
  )
}

export default Index