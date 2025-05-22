import React from 'react'

const SubSearchresult = () => {
  return (
     <>
     <section>
  <div className="row mt-3 my-4 px-4">
    <div className="col-10 col-md-6  ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.70906702869!2d73.69815139367944!3d18.524870612673507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1745513948468!5m2!1sen!2sin"
       title='Map'
        width={600}
        height={850}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
    <div className="col-12 col-md-6">
      <div className="row">
        <div className="d-flex justify-content-space-evenly mx-5 mb-2 mt-3 p-5 gap-5">
          <h4 className="fw-bold" style={{ color: "red" }}>
            NEWEST
          </h4>
          <h4>Price Low</h4>
          <h4>Price High</h4>
        </div>
        <div className="col-12 col-md-6">
          <h5 className="  fw-bold image-text">New</h5>
          <img
            src="./Media/new3bed.webp"
            alt="Handshake"
            className="img-fluid   mb-3"
          />
          <h3 className="mb-3 fw-bold">$469,000</h3>
          <h5 className="mb-3 fw-bold">3 Bedrooms Townhouse</h5>
          <p className="mb-1">3 Bed | 2 Baths | 1 Garage | 2849 SF</p>
          <a
            href="/searchresult"
            className="fw-bold text-danger text-decoration-underline mt-3 mb-3 d-inline-block"
          >
            Find out more
          </a>
        </div>
        <div className="col-12 col-md-6">
          <h5 className="bg-warning fw-bold image-text">Offer</h5>
          <img
            src="./Media/offer3bed.webp"
            alt="Handshake"
            className="img-fluid   mb-3"
          />
          <h3 className="mb-3 fw-bold">$469,000</h3>
          <h5 className="mb-3 fw-bold">3 Bedrooms Townhouse</h5>
          <p className="mb-1">3 Bed | 2 Baths | 1 Garage | 2849 SF</p>
          <a
            href="/searchresult"
            className="fw-bold text-danger text-decoration-underline mt-3 mb-3 d-inline-block"
          >
            Find out more
          </a>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <h5 className="fw-bold image-text">New</h5>
            <img
              src="./Media/new3bed2.webp"
              alt="Handshake"
              className="img-fluid   mb-3"
            />
            <h3 className="mb-3 fw-bold">$469,000</h3>
            <h5 className="mb-3 fw-bold">3 Bedrooms Townhouse</h5>
            <p className="mb-1">3 Bed | 2 Baths | 1 Garage | 2849 SF</p>
            <a
              href="/searchresult"
              className="fw-bold text-danger text-decoration-underline mt-3 mb-3 d-inline-block"
            >
              Find out more
            </a>
          </div>
          <div className="col-12 col-md-6">
            <h5 className="bg-warning fw-bold image-text">Offer</h5>
            <img
              src="./Media/offer3bed2.webp"
              alt="Handshake"
              className="img-fluid   mb-3"
            />
            <h3 className="mb-3 fw-bold">$469,000</h3>
            <h5 className="mb-3 fw-bold">3 Bedrooms Townhouse</h5>
            <p className="mb-1">3 Bed | 2 Baths | 1 Garage | 2849 SF</p>
            <a
              href="/searchresult"
              className="fw-bold text-danger text-decoration-underline mt-3 mb-3 d-inline-block"
            >
              Find out more
            </a>
          </div>
        </div>
        <button
          className="btn btn-danger p-9 w-25"
          style={{ borderRadius: 0, backgroundColor: "red", padding: 10 }}
        >
          Load More
        </button>
      </div>
    </div>
  </div>
</section>

     </>
  )
}

export default SubSearchresult