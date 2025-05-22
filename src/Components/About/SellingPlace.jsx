import React from 'react'

const SellingPlace = () => {
  return (
     <>
     <section className="about-section text-white py-5 ">
  <div className="container p-5 mb-2 text-center">
    <h2 className="fw-bold display-5 mb-5">Selling your place is easy</h2>
    <div className="row text-center justify-content-center">
      <div className="col-md-4 mb-4">
        <div className="step-number bg-danger text-white rounded-circle mx-auto mb-3">
          01.
        </div>
        <h5 className="fw-bold">Search</h5>
        <p className="text-white-50 small">
          Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique
          id vitae massa. Proin vulputate congue rutrum. Fusce lobortis a enim
          eget tempus. Class aptent taciti sociosqu.
        </p>
      </div>
      <div className="col-md-4 mb-4">
        <div className="step-number bg-danger text-white rounded-circle mx-auto mb-3">
          02.
        </div>
        <h5 className="fw-bold">Compare</h5>
        <p className="text-white-50 small">
          Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique
          id vitae massa. Proin vulputate congue rutrum. Fusce lobortis a enim
          eget tempus. Class aptent taciti sociosqu.
        </p>
      </div>
      <div className="col-md-4 mb-4">
        <div className="step-number bg-danger text-white rounded-circle mx-auto mb-3">
          03.
        </div>
        <h5 className="fw-bold">Connect</h5>
        <p className="text-white-50 small">
          Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique
          id vitae massa. Proin vulputate congue rutrum. Fusce lobortis a enim
          eget tempus. Class aptent taciti sociosqu.
        </p>
      </div>
    </div>
    <button
      className="btn btn-danger mt-4 px-4 py-2"
      style={{ borderRadius: 0, backgroundColor: "red", padding: 10 }}
    >
      CONTACT AN AGENT NOW
    </button>
  </div>
</section>

     </>
  )
}

export default SellingPlace