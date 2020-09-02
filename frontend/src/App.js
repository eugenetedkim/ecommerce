import React from "react";
import data from "./data";
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
            {data.products.map((product) => (
              <li>
                <div className="product">
                  <a href="">
                    <img
                      className="product-image"
                      src={product.image}
                      alt="product"
                    />
                  </a>
                  <div className="product-name">
                    <a href="">{product.name}</a>
                  </div>
                  <div className="product-brand">{product.brand}</div>
                  <div className="product-price">{product.price}</div>
                  <div className="product-rating">
                    {product.ratings} Stars {product.numReviews}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <footer className="footer">All rights reserved.</footer>
    </div>
  );
}

export default App;
