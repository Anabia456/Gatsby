import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import styles from '../styles/navbar.css'
import Helmet from 'react-helmet'


export default function Home({ data }) {
  console.log(data)
  const contacts = data.site.siteMetadata
  return (
    <Layout>
      <Helmet>
          <title>Cake | Home</title>
      </Helmet>
      <div>
        <img src="/banner-c.jpg" alt=""  style={{width:'100%'}} />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="head-color mt-5">About Cake Shop</h2>
              <h2 className="h2 mt-3"   style={{fontSize:'40px'}}>Cakes And Bakes from The House Of Queens!</h2>
              <p className="mt-3">The "Cake Shop" is a Jordanian Brand that started as a small family business. The owners are Dr. Iyad Sultan and Dr. Sereen Sharabati, supported by a staff of 80 employees.</p>
            </div>
            <div className="col-md-6">
              
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4 mt-5">
              <h2 className="head-color mt-5">Follow Us On Instagram</h2>
              <h2 className="h2 mt-3"  style={{fontSize:'40px'}}>Sweet moments are saved as memories.</h2>
              {/* <p><FontAwesomeIcons icon={FaInstagram} /></p> */}
              <Link to="#" className="nav-link mt-3" style={{color:'black',fontSize:'25px'}}><img src="/ig-logo.jpg" className="mt-3" alt="ig-logo" style={{width:'20%'}}/>{ contacts.contact }</Link>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-4 text-center">
                  <img src="/img1.webp" alt="img1" />
                </div>
                <div className="col-md-4 text-center mt-4">
                <img src="/img2.webp" alt="img1" />
                </div>
                <div className="col-md-4 text-center">
                <img src="/img3.jpg" alt="img1" />
                </div>
                <div className="col-md-4 text-center">
                <img src="/img3.jpg" alt="img1" />
                </div>
                <div className="col-md-4 text-center mt-4">
                <img src="/img4.jpg" alt="img1" />
                </div>
                <div className="col-md-4 text-center">
                <img src="/img5.jpg" alt="img1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query IndexQuery {
  site{
    siteMetadata{
        contact
    }
  }
}
`

// https://preview.colorlib.com/theme/cake/about.html