import React from 'react';
import '../../Css/index.css';

const SellerSuccess = () => {
  return (
    <>
    <section className="container">
        <div className="row align-items-center mb-5">
            <div className="col-md-7 order-2 order-md-1">
            <h4 className="display-3 fw-bold  mt-4">Seller Success Stories</h4>
            <p className="text-secondary mt-3">
                Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu ad
                litora. Donec eget efficitur ex. Donec eget dolor vitae eros feugiat
                tristique id vitae massa. Proin vulputate congue rutrum. Fusce lobortis
                a enim eget tempus. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Suspendisse potenti. Ut gravida
                mattis magna, non varius lorem sodales nec. In libero orci, ornare non
                nisl a, auctor euismod purus. Morbi pretium interdum vestibulum. Fusce
                nec eleifend ipsum. Sed non blandit tellus.
            </p>
            <a
                href="/"
                className="fw-bold text-danger text-decoration-underline mt-3  d-inline-block"
            >
                Find out more
            </a>
            </div>
            <div className="col-md-5 order-1 order-md-2 ">
            <img
                src="./Media/SellerStory.webp"
                alt="SellerStory"
                className="img-fluid rounded"
            />
            </div>
        </div>
    </section>

    
    </>
  )
}

export default SellerSuccess