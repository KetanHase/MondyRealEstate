import React from 'react';
import '../../Css/index.css';
 
const Mortgage = () => {
  return (
    <>
      <section
        className="container bg-black mb-3 text-center"
        style={{ padding: "0 54px" }}
       >
        <div style={{ padding: "95px 0 110px" }}>
          <div>
            <h1 className="display-4 fw-bold text-white mb-8 mt-10">
              See If You Qualify for a Mortgage
            </h1>
            <p className="text-white-50 mb-4 m-9">
              Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique
              id vitae massa. Proin vulputate congue rutrum. Fusce lobortis a enim
              eget tempus. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Suspendisse potenti. Ut gravida mattis
              magna, non varius lorem sodales nec. In libero orci, ornare non nisl a,
              auctor euismod purus. Morbi pretium interdum vestibulum. Fusce nec
              eleifend ipsum. Sed non blandit tellus.
            </p>
          </div>
          <div className="d-flex flex-md-row flex-column align-items-center justify-content-center">
            <input
              type="text"
              style={{ borderRadius: 0 }}
              name="nameabc"
              id="nameabc"
              className="form-control bg-white p-3 m-2  w-75 w-md-100"
              placeholder="Your income"
            />
            <input
              type="text"
              style={{ borderRadius: 0 }}
              className="form-control p-3 m-2 w-75 w-md-100"
              placeholder="Amount Needed"
            />
            <button
              className="btn btn-danger  m-2 p-3 w-50"
              style={{ borderRadius: 0, backgroundColor: "red" }}
            >
              Submit
            </button>
          </div>
        </div>
      </section>

    
    </>
  )
}

export default Mortgage