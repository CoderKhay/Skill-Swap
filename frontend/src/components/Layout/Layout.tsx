import { BrowserRouter, Routes, Route } from "react-router";
import LandingPage from "../LandingPage/LandingPage";
import Auth from "../Auth/Auth";
import Signin from "../Auth/Signin";
import Signup from "../Auth/Signup";

const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="signin" element={<Auth />}>
          <Route index element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
