import React from "react"
import styles from "../styles/bootstrap.css"

function Footer() {
  return (
    <div>
      <div className="footer mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4  mt-5">
              <h2 className="mt-3">Working Hours</h2>
              <p className="mt-3">Monday - Friday: 08:00 am – 08:30 pm</p>
              <p className="mt-3">Saturday: 10:00 am – 16:30 pm</p>
              <p className="mt-3">Sunday: 10:00 am – 16:30 pm</p>
            </div>
            <div className="col-md-4  mt-5" style={{ paddingRight: "30px" }}>
              <img src="/foot-logo.webp" alt="logo" className="mt-3 logo-img" />
              <p className="text-center mt-3">
                Lorem ipsum dolor amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore dolore magna aliqua.
              </p>
            </div>
            <div
              className="col-md-4 ml-3  mt-5"
              style={{ paddingLeft: "30px" }}
            >
              <h2 className="mt-3">Subscribe</h2>
              <p className="mt-3">Get Latest Updates & Offers</p>
              <input
                type="text"
                placeholder="Enter Email"
                className="input-control w-100"
              />              
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
                <div className="text-center">
                    <p>CopyRight &#169; 2021 | All rights are reserved.</p>
                </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
