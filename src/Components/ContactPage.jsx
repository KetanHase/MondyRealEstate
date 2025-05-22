import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
 

const ContactPage = () => {

const navigate=useNavigate();


    // 1 state defined
    const [data, setData] = useState({ name: '', email: '', subject: '', message: ''})


    const dataHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    console.log(data) 


    const saveForm=async(e)=>{

        e.preventDefault()
        alert('Message Sent Successfully')
        console.log(data)


        await axios.post('http://localhost:5000/users',data)

        navigate('/contact')


    }

  return (
     <>
      
        <section className="container mt-10 p-5">
            <div className="row">
            <div className="col-12 col-md-6 p-4">
                <h2 className="display-2 fw-bold mb-2 p-4"> Get In touch</h2>
                <p>
                Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique
                id vitae massa. Proin vulputate congue rutrum. Fusce lobortis a enim
                eget tempus. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Suspendisse potenti. Ut
                gravida mattis magna.
                </p>
            </div>
            <div className="col-12 col-md-6">
                <div className="container-fluid  my-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-4 location-item">
                    <div className="location-icon">CA</div>
                    <h5>Los Angeles</h5>
                    <p>2768 Clousson Road Los</p>
                    <p>Angeles, CA 77002</p>
                    </div>
                    <div className="col-12 col-md-4 location-item">
                    <div className="location-icon">TX</div>
                    <h5>Texas</h5>
                    <p>2768 Clousson Road</p>
                    <br />
                    <p>Houston, TX 77002</p>
                    </div>
                    <div className="col-12 col-md-4 location-item">
                    <div className="location-icon">FL</div>
                    <h5>Florida</h5>
                    <p>4713 Wyatt Street Boca</p>
                    <p>Raton, FL 33434</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section className="container">
            <form action="" onSubmit={(e)=>saveForm(e)} className="contact-form">
            <div className="row">
                <div className="col-lg-4">
                <input type="text" placeholder="Your name"
                name='name' required
                 id="" onChange={(e)=>dataHandler(e)}
                 />
                </div>
                <div className="col-lg-4">
                <input type="email" placeholder="Your e-mail" 
                name="email"   required onChange={(e)=>dataHandler(e)}
                />
                </div>
                <div className="col-lg-4">
                <input type="text" placeholder="Subject" 
                name="subject" required   onChange={(e)=>dataHandler(e)}
                />
                </div>
                <div className="col-lg-12">
                <textarea placeholder="Message" defaultValue={""} 
                 name="message"  required  onChange={(e)=>dataHandler(e)}
                />
                <button className="site-btn sb-big" style={{ border: "none" }}>
                    Send message
                </button>
                </div>
            </div>
            </form>
        </section>
   </>

      
  )
}

export default ContactPage