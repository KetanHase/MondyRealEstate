import React from 'react'

const Footer = () => {
  return (
    <> 
    <footer>
  <div className="container-fluid bg-black text-white py-5">
    <div className="row">
      <div className="col-md-4 px-4 py-5  text-start text-md-end ">
        <h2 className="fw-bold text-white">MONDY</h2>
        <p
          className="text-muted text-white-50 mb-3"
          style={{ letterSpacing: 3 }}
        >
          REAL ESTATE
        </p>
        <p className="text-white-50">
          Donec eget efficitur ex. Donec eget <br />
          dolor vitae eros feugiat tristique id <br /> vitae massa. Proin
          vulputate congue <br /> rutrum. Fusce lobortis a enim <br />
          eget tempus.
        </p>
        <button
          className="btn btn-danger mt-3 px-4"
          style={{ borderRadius: 0, backgroundColor: "red", padding: 13 }}
        >
          WE ARE HIRING
        </button>
      </div>
      <div className=" col-md-1  d-none d-md-flex align-items-center ">
        <div className="vertical-line" />
      </div>
      <div className="col-md-7 px-4 py-5  ">
        <div className="row w-100">
          <div className="col-12 col-md-3 mb-4">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled text-white-50">
              <li>
                <a className="text-decoration-none text-white-50" href="/about">
                  About us
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white-50" href="/">
                  Services
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white-50" href="/">
                  Clients
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white-50" href="/">
                  Testimonials
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white-50" href="/">
                  Carrers
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3 mb-4">
            <h6 className="fw-bold">For Buyers</h6>
            <ul className="list-unstyled text-white-50">
              <li>
                <a className="text-decoration-none text-white-50" href="/">
                  Buy with us
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white-50" href="/">
                  Papers
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white-50" href="/">
                  Clients
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white-50" href="/">
                  Testimonials
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white-50" href="/">
                  Homes
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3 mb-4">
            <h6 className="fw-bold">For Sellers</h6>
            <ul className="list-unstyled text-white-50">
              <li>
                <a className="text-decoration-none text-white-50" href="/">
                  Seel With us
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white-50" href="/">
                  What do You Need
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white-50" href="/">
                  Clients
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white-50" href="/">
                  Testimonials
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white-50" href="/">
                  Guideline
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3 mb-4">
            <h6 className="fw-bold">For Renters</h6>
            <ul className="list-unstyled text-white-50">
              <li>
                <a className="text-decoration-none text-white-50" href="/">
                  Rent with us
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white-50" href="/">
                  Guidelines
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white-50" href="/">
                  Apartments
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white-50" href="/">
                  Flats
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white-50" href="/">
                  Houses
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="row mt-4 px-3">
      <div className="col text-end text-white-50 small">
        COPYRIGHT ©2025 ALL RIGHTS RESERVED | THIS IS MADE WITH BY{" "}
        <a href="/" className="text-primary text-decoration-none">
          Ketan
        </a>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer