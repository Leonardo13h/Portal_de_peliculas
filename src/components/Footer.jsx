import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
  
<div className="container">
  <footer className="py-4 mt-5 border-top">
    <ul className="nav justify-content-center mb-3">
      <li className="nav-item">
        <Link to={'/inicio'}
          href="#"
          className="nav-link px-3 py-2 text-muted hover-footer"
          style={{ fontWeight: 500, fontSize: "0.9rem" }}
        >
          Inicio
        </Link>
      </li>
      <li className="nav-item">
        <a
          href="#"
          className="nav-link px-3 py-2 text-muted hover-footer"
          style={{ fontWeight: 500, fontSize: "0.9rem" }}
        >
          Tendencias
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#"
          className="nav-link px-3 py-2 text-muted hover-footer"
          style={{ fontWeight: 500, fontSize: "0.9rem" }}
        >
          Películas
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#"
          className="nav-link px-3 py-2 text-muted hover-footer"
          style={{ fontWeight: 500, fontSize: "0.9rem" }}
        >
          FAQs
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#"
          className="nav-link px-3 py-2 text-muted hover-footer"
          style={{ fontWeight: 500, fontSize: "0.9rem" }}
        >
          About
        </a>
      </li>
    </ul>
    <p className="text-center text-muted mb-0">
      © 2025 Company, Inc. Todos los derechos reservados.
    </p>
  </footer>
</div>
  );
};

export default Footer;
