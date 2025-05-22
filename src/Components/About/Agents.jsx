import React from 'react';
import '../../Css/about.css';
// import '../../Css/index.css';


const Agents = () => {
  return (
     <>
     <section className="container my-5">
        <div className="row align-items-center  mb-5" style={{ textAlign: "center" }}>
            <h1
            className="display-2 fw-bold mb-3  text-dark"
            style={{ textAlign: "center" }}
            >
            {" "}
            The Agents
            </h1>
            <div className="col-md-4">
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
                href="/about"
                className="fw-bold text-danger text-decoration-underline mt-3 mb-3 d-inline-block"
            >
                Contact the agent
            </a>
            </div>
            <div className="col-md-4">
            <img
                src="./Media/DavinaBrown.webp"
                alt="Handshake"
                className="img-fluid  mb-3"
            />
            <h3 className="mb-3 fw-bold">Davina Brown</h3>
            <p className="mb-3">
                Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu ad
                litora. Donec eget efficitur ex. Donec eget dolor vitae eros feugiat
                tristique id vitae massa. Proin vulputate congue rutrum.
            </p>
            <a
                href="/about"
                className="fw-bold text-danger text-decoration-underline mt-3 mb-3 d-inline-block"
            >
                Contact the agent
            </a>
            </div>
            <div className="col-md-4 align">
            <img
                src="./Media/MichaelSmith.webp"
                alt="Handshake"
                className="img-fluid  mb-3"
            />
            <h3 className="mb-3 fw-bold"> Michael Smith</h3>
            <p className="mb-3">
                Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu ad
                litora. Donec eget efficitur ex. Donec eget dolor vitae eros feugiat
                tristique id vitae massa. Proin vulputate congue rutrum.
            </p>
            <a
                href="/about"
                className="fw-bold text-danger text-decoration-underline mt-3 mb-3 d-inline-block"
            >
                Contact the agent
            </a>
            </div>
        </div>
        </section>

     </>
  )
}

export default Agents;