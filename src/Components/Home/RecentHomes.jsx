import React from 'react';
import '../../Css/index.css';

const RecentHomes = () => {
  return (
     <>
         <section className="container my-5">
  <div className="row align-items-center mb-5">
    <h1
      className="display-2 fw-bold   text-dark"
      style={{ textAlign: "center" }}
    >
      Recently Add Homes
    </h1>
    <div className="col-md-4">
      <h5 className="  fw-bold image-text">New</h5>
      <img
        src="./Media/New469.webp"
        alt="Handshake"
        className="img-fluid   mb-3"
      />
      <h3 className="mb-3 fw-bold">$469,000</h3>
      <h5 className="mb-3 fw-bold">3 Bedrooms Townhouse</h5>
      <p className="mb-3">
        Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique
        id vitae massa. Proin vulputate congue rutrum. Fusce lobortis a enim
        eget tempus. Class aptent taciti sociosqu ad litora.
      </p>
      <a
        href="/"
        className="fw-bold text-danger text-decoration-underline mt-3 mb-3 d-inline-block"
      >
        Find out more
      </a>
    </div>
    <div className="col-md-4">
      <h5 className="bg-warning fw-bold image-text">Offer</h5>
      <img
        src="./Media/Offer369.webp"
        alt="Handshake"
        className="img-fluid  mb-3"
      />
      <h3 className="mb-3 fw-bold">$369,000</h3>
      <h5 className="mb-3 fw-bold">3 Bedrooms Townhouse</h5>
      <p className="mb-3">
        Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique
        id vitae massa. Proin vulputate congue rutrum. Fusce lobortis a enim
        eget tempus. Class aptent taciti sociosqu ad litora.
      </p>
      <a
        href="/"
        className="fw-bold text-danger text-decoration-underline mt-3 mb-3 d-inline-block"
      >
        Find out more
      </a>
    </div>
    <div className="col-md-4">
      <h5 className="  fw-bold image-text">New</h5>
      <img
        src="./Media/New560.webp"
        alt="Handshake"
        className="img-fluid  mb-3"
      />
      <h3 className="mb-3 fw-bold">$560,000</h3>
      <h5 className="mb-3 fw-bold">3 Bedrooms Townhouse</h5>
      <p className="mb-3">
        Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique
        id vitae massa. Proin vulputate congue rutrum. Fusce lobortis a enim
        eget tempus. Class aptent taciti sociosqu ad litora.
      </p>
      <a
        href="/"
        className="fw-bold text-danger text-decoration-underline mt-3 mb-3 d-inline-block"
      >
        Find out more
      </a>
    </div>
  </div>
</section>

     
     </>
  )
}

export default RecentHomes