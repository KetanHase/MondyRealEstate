import React from 'react'

const SearchbarAbout = () => {
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
          <a className="nav-link active" data-bs-toggle="tab" href="/about">
            Buy
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="/about">
            Rent
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="/about">
            Sell
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="/about">
            Property Value
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="/about">
            Agents
          </a>
        </li>
      </ul>
      <div className="d-flex flex-wrap align-items-center gap-2 my-3">
        <div className="flex-grow-1">
          <input
            type="text"
            className="form-control"
            style={{ borderRadius: 0 }}
            placeholder="Search by state, postcode or suburb"
          />
        </div>
        <div className="d-flex gap-2">
          <button
            className="btn btn-danger px-4"
            style={{ border: "none", backgroundColor: "red", borderRadius: 0 }}
          >
            SEARCH
          </button>
          <button
            className="btn bg-white text-black px-4"
            style={{ borderRadius: 0 }}
          >
            SHOW Filters
          </button>
        </div>
      </div>
       
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

export default SearchbarAbout