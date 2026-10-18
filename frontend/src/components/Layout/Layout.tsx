import { BrowserRouter,Routes,Route } from "react-router"
import LandingPage from "../LandingPage/LandingPage"

const Layout = () => {
  return (
    <BrowserRouter>
 <Routes>
  <Route path='/' element={<LandingPage />}/>
 </Routes>
 </BrowserRouter> 
  )
}

export default Layout