import React from 'react'
import { RoutesContext } from './RoutesContext'

const routes = {
    home: '/',
    info: '/Info',
    portfolio : '/Portfolio',
    project : '/Project'
}

const nameRoutes = {
    close : 'Close',
    info : 'Info',
    portfolio : 'Portfolio',
    project : 'Project'
}

const RoutesProvider = ({children}) => {
  return (
    <RoutesContext.Provider value={{routes, nameRoutes}}>
        {children}
    </RoutesContext.Provider>
  )
}

export default RoutesProvider