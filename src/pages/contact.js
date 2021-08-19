import React from 'react'
import Layout from '../components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faPhone, faEnvelopeOpen  } from '@fortawesome/free-solid-svg-icons'
import Helmet from 'react-helmet'

function Contact() {
    return (
        <div>
            <Layout>
            <Helmet>
                <title>Cake | Contact</title>
            </Helmet>
                <div className="container">
                <h1 style={{fontSize:'60px', fontFamily:'Estrangelo Edessa'}} className="mt-3">Contact</h1>
                <img src="https://preview.colorlib.com/theme/cake/img/blog/blog-2.jpg" className="w-100 mt-3 images" alt="about"/>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <h5 className="mt-5">SAN BERNARDINO</h5>
                            <p><FontAwesomeIcon icon={ faMapMarker  } />  795 W 5th St, San Bernardino, CA 92410, USA</p>
                            <p><FontAwesomeIcon icon={ faPhone  } />  +1 800-786-1000</p>
                            <p><FontAwesomeIcon icon={ faEnvelopeOpen  } />  Sweetcake@support.com</p>
                        </div>
                        <div className="col-md-4">
                            <h5 className="mt-5">LOS ANGELES</h5>
                            <p><FontAwesomeIcon icon={ faMapMarker  } />  795 W 5th St, San Bernardino, CA 92410, USA</p>
                            <p><FontAwesomeIcon icon={ faPhone  } />  +1 800-786-1000</p>
                            <p><FontAwesomeIcon icon={ faEnvelopeOpen  } />  Sweetcake@support.com</p>
                        </div>
                        <div className="col-md-4">
                            <h5 className="mt-5">SAN BERNARDINO</h5>
                            <p><FontAwesomeIcon icon={ faMapMarker  } />  795 W 5th St, San Bernardino, CA 92410, USA</p>
                            <p><FontAwesomeIcon icon={ faPhone  } />  +1 800-786-1000</p>
                            <p><FontAwesomeIcon icon={ faEnvelopeOpen  } />  Sweetcake@support.com</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <h2 className="h2">Contact With us</h2>
                            <p>Representatives or Advisors are available:</p>
                            <p>Mon-Fri: 5:00am to 9:00pm</p>
                            <p>Sat-Sun: 6:00am to 9:00pm</p>
                            <img src="https://preview.colorlib.com/theme/cake/img/xcake-piece.png.pagespeed.ic.idaA_zWQ1A.webp" alt="" />
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" placeholder="Name" className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <input type="email" placeholder="Email" className="form-control" />
                                </div>
                                <textarea placeholder="Message" className="mt-5 form-control"  col="30" rows="10"></textarea>
                            </div>
                            <button type="submit" className="mt-3 site-btn">Send Us</button>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Contact
