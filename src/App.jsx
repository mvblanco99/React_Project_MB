import { Route, Routes, Navigate } from "react-router-dom"
import Index from "./components/Index"
import Info from "./components/Info"
import Portfolio from "./components/Portfolio"
import Project from "./components/Project"
import { RoutesContext } from "./context/RoutesContext"
import { useContext } from "react"

function App() {
  
  const { routes } = useContext(RoutesContext);

  return (
      <>
        <Routes>
          <Route path={routes.home} element={ <Index/> }></Route>
          <Route path={routes.info} element={ <Info/> }></Route>
          <Route path={routes.portfolio} element={ <Portfolio/> }></Route>
          <Route path={routes.project} element={ <Project/> }></Route>
          <Route path="/*" element={<Navigate to={routes.home}/>}></Route>
        </Routes>
      </>
  )
}

export default App
