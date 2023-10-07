import { Route, Routes, Navigate } from "react-router-dom"
import Index from "./components/Index"
import Info from "./components/Info"
import Portfolio from "./components/Portfolio"
import Project from "./components/Project"

function App() {
  
  return (
      <>
        <Routes>
          <Route path="/" element={ <Index/> }></Route>
          <Route path="/Info" element={ <Info/> }></Route>
          <Route path="/Portfolio" element={ <Portfolio/> }></Route>
          <Route path="/Project" element={ <Project/> }></Route>
          <Route path="/*" element={<Navigate to='/'/>}></Route>
        </Routes>
      </>
  )
}

export default App
