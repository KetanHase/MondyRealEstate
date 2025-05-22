import React from 'react';
import '../../Css/index.css';

const SearchbarHome = () => {
  return (
     <>
     <section className="hero">
  <div className="container1 position-relative">
    <div className="overlay">
      {/* Tabs */}
      <ul
        className="nav   justify-content-start mb-3 search-tabs"
        id="propertyTabs"
      >
        <li className="nav-item">
          <a className="nav-link active" data-bs-toggle="tab" href="/">
            Buy
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="/">
            Rent
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="/">
            Sell
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="/">
            Property Value
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="/">
            Agents
          </a>
        </li>
      </ul>
      {/* Search Box */}
      <div className="search-box w-80 shadow-sm">
        <input
          type="text"
          className="form-control"
          style={{ borderRadius: 0 }}
          placeholder="Search by state, postcode or suburb"
        />
        <button
          className="btn btn-danger px-4"
          style={{ borderRadius: 0, backgroundColor: "red" }}
        >
          SEARCH
        </button>
      </div>
      {/* Description */}
      <p className="mt-4 text-white-50 fst-italic small">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida.
      </p>
    </div>
  </div>
</section>

     </>
  )
}

export default SearchbarHome