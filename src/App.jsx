import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Actions from "./pages/Actions/Actions";
import Services from "./pages/Servicess/Services";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";

const Layout = () => {
  const location = useLocation();
  const validRoutes = ["/", "/actions", "/services", "/about", "/contact"];
  const showLayout = validRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      {showLayout && <Navbar />}
      <Outlet />
      {showLayout && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/actions" element={<Actions />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
