import React from 'react'

const YoungTeam = () => {
  return (
     <>
     <section className="container">
  <div className="row align-items-center mb-5">
    <div className="col-md-7">
      <h4 className="display-5 fw-bold  mt-4">
        A young team that is here to help you get your dream home.
      </h4>
      <p className="text-secondary mt-3">
        Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique
        id vitae massa. Proin vulputate congue rutrum. Fusce lobortis a enim
        eget tempus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Suspendisse potenti. Ut gravida mattis
        magna, non varius lorem sodales nec. In libero orci, ornare non nisl a,
        auctor euismod purus. Morbi pretium interdum vestibulum. Fusce nec
        eleifend ipsum. Sed non blandit tellus.
      </p>
      <a
        href="/about"
        className="fw-bold text-danger text-decoration-underline mt-3  d-inline-block"
      >
        Find out more
      </a>
    </div>
    <div className="col-md-5">
      <img
        src="./Media/YoungTeam.webp"
        alt="SellerStory"
        className="img-fluid rounded"
      />
    </div>
  </div>
</section>

     </>
  )
}

export default YoungTeam