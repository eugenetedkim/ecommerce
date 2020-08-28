import React from "react";
import "./App.css";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand-name">
          <button onClick={openMenu}>&#9776;</button>
          <a href="index.html">Eugene's Security</a>
        </div>
        <div className="header-links">
          <a href="signin.html">Sign in</a>
          <a href="cart.html">Cart</a>
        </div>
      </header>

      <aside className="sidebar">
        <h3>Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>
          x
        </button>
        <ul>
          <li>
            <a href="index.html">Surveillance</a>
          </li>
          <li>
            <a href="index.html">Protection</a>
          </li>
        </ul>
      </aside>

      <main className="main">
        <div className="content">
          <ul className="products">
            <li>
              <div className="product">
                <a href="">
                  <img
                    className="product-image"
                    src="images/night-vision.png"
                    alt="product"
                  />
                </a>
                <div className="product-name">
                  <a href="">
                    Background Hd, Vortex, Vortex Razor Hd Spotting Scope,
                    Binoculars, Vortex Optics, Roof Prism, Vortex Optics
                    Diamondback Binocular, Green
                  </a>
                </div>
                <div className="product-brand">Vortex Diamondback</div>
                <div className="product-price">$190</div>
                <div className="product-rating">4.6 Stars (239 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <a href="">
                  <img
                    className="product-image"
                    src="images/night-cap.png"
                    alt="product"
                  />
                </a>
                <div className="product-name">
                  <a href="">
                    Night vision device Binocular vision Thermographic camera
                    Binoculars, Binoculars
                  </a>
                </div>
                <div className="product-brand">X Vision</div>
                <div className="product-price">$760</div>
                <div className="product-rating">4.3 Stars 192 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <a href="">
                  <img
                    className="product-image"
                    src="images/binoculars.png"
                    alt="product"
                  />
                </a>
                <div className="product-name">
                  <a href="">
                    Binoculars Optics Telescope Spotting Scopes, binocular
                  </a>
                </div>
                <div className="product-brand">Orion</div>
                <div className="product-price">$1299</div>
                <div className="product-rating">4.4 Stars (128 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <a href="">
                  <img
                    className="product-image"
                    src="images/spotting.png"
                    alt="product"
                  />
                </a>
                <div className="product-name">
                  <a href="">
                    Spotting Scopes Eyepiece Viewing instrument Low-dispersion
                    glass Nikon Monarch ATB 10x42 DCF, Binoculars
                  </a>
                </div>
                <div className="product-brand">Nikon</div>
                <div className="product-price">$1395</div>
                <div className="product-rating">4.7 Stars (329 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <a href="">
                  <img
                    className="product-image"
                    src="images/thermographic.png"
                    alt="product"
                  />
                </a>
                <div className="product-name">
                  <a href="">
                    Thermographic camera Monocular Night vision Pulsar Thermal
                    energy, binocular vision
                  </a>
                </div>
                <div className="product-brand">Pulsar</div>
                <div className="product-price">$2149</div>
                <div className="product-rating">4.5 Stars (210 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <a href="">
                  <img
                    className="product-image"
                    src="images/security-camera.png"
                    alt="product"
                  />
                </a>
                <div className="product-name">
                  <a href="">
                    Security Camera System (Send Photos from Rasberry Pi via MMS
                    Text Message)
                  </a>
                </div>
                <div className="product-brand">Eugene Security Company</div>
                <div className="product-price">$120</div>
                <div className="product-rating">4.9 Stars (485 Reviews)</div>
              </div>
            </li>
          </ul>
        </div>
      </main>

      <footer className="footer">All rights reserved.</footer>
    </div>
  );
}

export default App;
