import React from 'react'
import { Link } from "gatsby"
import Layout from '../components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter, faLinkedin  } from '@fortawesome/free-brands-svg-icons'
import Helmet from 'react-helmet'

function About() {
    return (
        <div>
            <Layout>
            <Helmet>
                <title>Cake | About</title>
            </Helmet>
                <div className="container">
                    <h1 style={{fontSize:'60px', fontFamily:'Estrangelo Edessa'}} className="mt-3">About</h1>
                    <img src="/about.jpg" className="w-100 mt-3 images" alt="about"/>
                </div>
                <h2 className="text-center head-color mt-5">Our Team</h2>
                <h1 className="h2 text-center">Sweet Baker</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 text-center mt-5">
                        <div className="image">
                            <img src="/team-1.webp" alt="team-1"/>
                        <div className="img-overlay">
                            <h1 className="img-title">Randy Buttler</h1>
                            <p className="img-des">Decorater</p>
                            <div className="d-flex">
                                <Link to="#" style={{color:'white'}}>
                                    <FontAwesomeIcon icon={ faInstagram  } />
                                </Link>
                                <Link to="#" style={{color:'white'}}>
                                    <FontAwesomeIcon icon={ faFacebook  } />
                                </Link>
                                <Link to="#" style={{color:'white'}}>
                                    <FontAwesomeIcon icon={ faTwitter } />
                                </Link>
                                <Link to="#" style={{color:'white'}}>
                                    <FontAwesomeIcon icon={ faLinkedin } /> 
                                </Link>
                            </div>
                        </div>
                    </div>
                        </div>
                        <div className="col-md-3 text-center mt-5">
                        <div className="image">
                            <img src="/team-2.webp" alt="team-1"/>
                        <div className="img-overlay">
                            <h1 className="img-title">Randy Buttler</h1>
                            <p className="img-des">Decorater</p>
                            <div className="d-flex">
                                <Link to="#" style={{color:'white'}}>
                                    <FontAwesomeIcon icon={ faInstagram  } />
                                </Link>
                                <Link to="#" style={{color:'white'}}>
                                    <FontAwesomeIcon icon={ faFacebook  } />
                                </Link>
                                <Link to="#" style={{color:'white'}}>
                                    <FontAwesomeIcon icon={ faTwitter } />
                                </Link>
                                <Link to="#" style={{color:'white'}}>
                                    <FontAwesomeIcon icon={ faLinkedin } /> 
                                </Link>
                            </div>
                        </div>
                        </div>
                        </div>
                        <div className="col-md-3 text-center mt-5">
                            <div className="image">
                                <img src="/team-3.webp" alt="team-1"/>
                            <div className="img-overlay">
                                <h1 className="img-title">Randy Buttler</h1>
                                <p className="img-des">Decorater</p>
                                <div className="d-flex">
                                <Link to="#" style={{color:'white'}}>
                                    <FontAwesomeIcon icon={ faInstagram  } />
                                </Link>
                                <Link to="#" style={{color:'white'}}>
                                    <FontAwesomeIcon icon={ faFacebook  } />
                                </Link>
                                <Link to="#" style={{color:'white'}}>
                                    <FontAwesomeIcon icon={ faTwitter } />
                                </Link>
                                <Link to="#" style={{color:'white'}}>
                                    <FontAwesomeIcon icon={ faLinkedin } /> 
                                </Link>
                            </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-3 text-center mt-5">
                            <div className="image">
                                <img src="/team-4.webp" alt="team-1"/>
                            <div className="img-overlay">
                                <h1 className="img-title">Randy Buttler</h1>
                                <p className="img-des">Decorater</p>
                                <div className="d-flex">
                                <Link to="#" style={{color:'white'}}>
                                    <FontAwesomeIcon icon={ faInstagram  } />
                                </Link>
                                <Link to="#" style={{color:'white'}}>
                                    <FontAwesomeIcon icon={ faFacebook  } />
                                </Link>
                                <Link to="#" style={{color:'white'}}>
                                    <FontAwesomeIcon icon={ faTwitter } />
                                </Link>
                                <Link to="#" style={{color:'white'}}>
                                    <FontAwesomeIcon icon={ faLinkedin } /> 
                                </Link>
                            </div>
                            </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default About