import React from "react";
import { Routes, Route } from "react-router-dom";

//paginas
import Home from "./pages/Home";
import NotFound from "./pages/NotFoundPage";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";

//componentes
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/Scroll/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
