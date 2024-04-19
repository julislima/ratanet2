// Footer.js

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap

function Footer() {
  return (
    
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>© 2024 RataNet.       Todos os direitos reservados.</p>
          </div>
          <div className="col-md-6">
            <div className="social-icons">
              <a href="footer" className="btn btn-outline-primary btn-social">
                <i className="fa fa-facebook-f"></i>
              </a>
              <a href="footer" className="btn btn-outline-primary btn-social">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="footer" className="btn btn-outline-primary btn-social">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="footer" className="btn btn-outline-primary btn-social">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
