import React from 'react';
import '../Css/index.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
  <div className="container">
    <a className="navbar-brand" href="/">
      MONDY{" "}
      <small
        className="d-block"
        style={{ fontSize: "0.7rem", letterSpacing: 1 }}
      >
        REAL ESTATE
      </small>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a className="nav-link active" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="about.html">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Buy
          </a>
        </li>
        <li className="nav-item dropdown hover-dropdown">
          <a
            className="nav-link  "
            href="/"
            id="pagesDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Pages
          </a>
          <ul className="dropdown-menu" aria-labelledby="pagesDropdown">
            <li>
              <a className="dropdown-item item" href="about.html">
                About Us
              </a>
            </li>
            <li>
              <a className="dropdown-item item" href="Searchresult.html">
                Search Results
              </a>
            </li>
            <li>
              <a className="dropdown-item item" href="Single-property.html">
                Property
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="news.html">
            News
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="contact.html">
            Contact
          </a>
        </li>
      </ul>
      <div className="d-flex">
        <a href="/" className="btn btn-link text-white me-2">
          Sign in
        </a>
        <a href="/" className="btn btn-outline-light-custom">
          Join us
        </a>
      </div>
    </div>
  </div>
</nav>



    </>
  )
}

export default Navbar;