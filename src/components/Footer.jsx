import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
  
 <div className="movie-footer-container">
  <footer className="movie-footer">
    {/* Barra superior con gradiente cinematográfico */}
    <div className="footer-top-bar"></div>
    
    {/* Navegación principal */}
    <nav className="footer-nav">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#" className="nav-link" data-hover="🏠">
            <span>Home</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" data-hover="⭐">
            <span>Features</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" data-hover="💰">
            <span>Pricing</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" data-hover="❓">
            <span>FAQs</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" data-hover="👥">
            <span>About</span>
          </a>
        </li>
      </ul>
    </nav>

    {/* Contenido inferior */}
    <div className="footer-bottom">
      <div className="footer-content">
        <p className="copyright">© 2025 CineVibe, Inc. Todos los derechos reservados</p>
        <div className="footer-glow"></div>
      </div>
    </div>

    {/* Efecto de partículas */}
    <div className="footer-particles">
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
    </div>
  </footer>
</div>
  );
};

export default Footer;
