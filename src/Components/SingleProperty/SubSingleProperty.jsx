import React from 'react'

const SubSingleProperty = () => {
  return (
    <>

    <section className="container">
  <div className="row">
    <div className="col-12 col-md-8 mt-3">
      <h5 className="  fw-bold image-text">New</h5>
      <img
        src="./Media/CloussonRoad.webp"
        alt="CloussonRoad"
        className="img-fluid   mb-3"
      />
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="fw-bold">2768 Clousson Road</h2>
        <h2 className="fw-bold text-end">$469,000</h2>
      </div>
      <div className="d-flex justify-content-between text-muted mb-3">
        <h6>Houston, TX 77002</h6>
        <h6>3 Bedrooms Townhouse</h6>
      </div>
      <div className="p-3 mb-4 bg-grey d-flex justify-content-between align-items-center">
        <p className="mb-0">3 Bed | 2 Baths | 1 Garage | 2849 SF</p>
        <button className="btn custom-btn">Make an Offer</button>
      </div>
      <h5 className="fw-bold">Description</h5>
      <p>
        Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique
        id vitae massa. Proin vulputate congue rutrum. Fusce lobortis a enim
        eget tempus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Suspendisse potenti. Ut gravida mattis
        magna, non varius lorem sodales nec. In libero orci, ornare non nisl a,
        auctor euismod purus. Morbi pretium interdum vestibulum. Fusce nec
        eleifend ipsum. Sed non blandit tellus.
      </p>
      <h5 className="fw-bold">Details</h5>
      <p>
        Proin vulputate congue rutrum. Fusce lobortis a enim eget tempus. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Suspendisse potenti. Ut gravida mattis magna, non
        varius lorem sodales nec. In libero orci, ornare non nisl a, auctor
        euismod purus. Morbi pretium interdum vestibulum. Fusce nec eleifend
        ipsum. Sed non blandit tellus.
      </p>
      <div className="row">
        <div className="col-6 col-md-2 mb-2 p-3">
          <strong>House Type</strong>
          <br />
          Family
        </div>
        <div className="col-6 col-md-2 mb-2 p-3">
          <strong>Stories</strong>
          <br />3
        </div>
        <div className="col-6 col-md-2 mb-2 p-3">
          <strong>Year Built</strong>
          <br />
          2008
        </div>
        <div className="col-6 col-md-2 mb-2 p-3">
          <strong>A/C</strong>
          <br />
          Central
        </div>
        <div className="col-6 col-md-2 mb-2 p-3">
          <strong>Heating</strong>
          <br />
          Forced Air
        </div>
        <div className="col-6 col-md-2 mb-2 p-3">
          <strong>Bathrooms</strong>
          <br />2
        </div>
        <div className="col-6 col-md-2 mb-2 p-3">
          <strong>Pool</strong>
          <br />
          Yes
        </div>
        <div className="col-6 col-md-2 mb-2 p-3">
          <strong>Fireplace</strong>
          <br />
          No
        </div>
        <div className="col-6 col-md-2 mb-2">
          <strong>Parking Spaces</strong>
          <br />2 spaces
        </div>
        <div className="col-6 col-md-2 mb-2 p-3">
          <strong>Parking Type</strong>
          <br />
          Garage
        </div>
        <div className="col-6 col-md-2 mb-2 p-3">
          <strong> </strong>
          <br />
        </div>
        <div className="col-6 col-md-2 mb-2 p-3">
          <strong> </strong>
          <br />
        </div>
        <div className="col-6 col-md-2 mb-2 p-3">
          <strong>Patio</strong>
          <br />
          128 SQ
        </div>
        <div className="col-6 col-md-2 mb-2 p-3">
          <strong>Playground</strong>
          <br />
          No
        </div>
      </div>
      <div className="mb-3">
        <iframe
          width={560}
          height={315}
          src="https://www.youtube.com/embed/4jnzf1yj48M?si=ATL4G5_i-9_iW4ki"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen=""
        />
      </div>
      <div className="bg-grey p-4 mb-4">
        <div className="row search-input p-5 mb-3">
          <h3 className="fw-bold mb-3">Loan Calculator</h3>
          <div className="col-12 col-md-4">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Purchase Price"
            />
          </div>
          <div className="col-12 col-md-4">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Interest Rate"
            />
          </div>
          <div className="col-12 col-md-4">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Down Payment"
            />
          </div>
          <div className="col-12 col-md-12">
            <input
              type="text"
              className="form-control mb-3 fw-bold"
              placeholder="Weekly Payments:$ 0.00"
            />
          </div>
          <div className="col-12 ">
            <button
              className="btn btn-danger custom-btn"
              style={{
                float: "right",
                backgroundColor: "red",
                color: "white",
                border: "none"
              }}
            >
              APPLY FOR PRE-QUALIFICATION
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-4 mt-3">
      <div className="bg-grey mb-3" style={{ textAlign: "center" }}>
        <img
          src="./Media/ChristinJames.webp"
          alt="Handshake"
          className="img-fluid   mb-3"
        />
        <h3 className="mb-3 fw-bold">Christinne James</h3>
        <p className="mb-3">
          Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu ad
          litora. Donec eget efficitur ex. Donec eget dolor vitae eros feugiat
          tristique id vitae massa. Proin vulputate congue rutrum.
        </p>
        <a
          href="/singleproperty"
          className="fw-bold text-danger text-decoration-underline mt-3 mb-3 d-inline-block"
        >
          Contact the agent
        </a>
      </div>
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.0344739699!2d73.86296739999999!3d18.52461645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1745572383606!5m2!1sen!2sin"
          title='YouTube'
          width={450}
          height={420}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </div>
</section>


    </>
  )
}

export default SubSingleProperty;