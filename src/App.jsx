import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import Tendencias from "./pages/Tendencias";
import Categorias from "./pages/Categrias";
import Detalle from "./pages/Detalle";
import Peliculas from "./pages/Peliculas";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/tendencias/:id" element={<Tendencias />} />
          <Route path="/categorias/:tipo/:id" element={<Categorias />} />
          <Route path="/Detalle/:tipo/:id" element={<Detalle />} />
          <Route path="/peliculas/:id" element={<Peliculas />} />
          <Route path="*" element={<Inicio />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
