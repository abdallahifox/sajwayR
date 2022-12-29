import React, { useEffect } from "react";

//TODO: React Router
import { Routes, Route, useLocation } from "react-router-dom";

import { motion, AnimatePresence, useScroll } from "framer-motion";

//TODO: React Components and Pages
import Layout from "./Components/UI_Helper/Layout";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Error from "./Pages/Error404";
function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Layout>
      <Navigation />
      <AnimatePresence exitBeforEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="*" element={<Error to="/404" />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </Layout>
  );
}

export default App;
