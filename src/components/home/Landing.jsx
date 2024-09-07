import React from "react";
import NFT from "../../images/nft.png";
import backgroundImage from "../../images/bg-shape-1.jpg";
import { Link } from "react-router-dom";
import AnimateOnScroll from "../UI/AnimateOnScroll";

const Landing = () => {
  return (
    
    <section
      id="section-hero"
      aria-label="section"
      className="no-top no-bottom vh-100"
      data-bgimage="url(images/bg-shape-1.jpg) bottom"
      style={{ background: `url(${backgroundImage}) bottom / cover` }}
    >
      <div className="v-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="spacer-single"></div>
              <h6>
                <AnimateOnScroll animation="fade" duration={1200} >
                  <span className="text-uppercase id-color-2">
                    Ultraverse Market
                  </span>
                </AnimateOnScroll>
              </h6>
              <div className="spacer-10"></div>
              <AnimateOnScroll animation="fade-up" duration={1200} delay="300" easing="ease-in-quart" once="true">
                <h1>Create, sell or collect digital items.</h1>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-up" duration={1200}  delay="600" easing="ease-in-quart">
                <p className="lead">
                  Unit of data stored on a digital ledger, called a blockchain,
                  that certifies a digital asset to be unique and therefore not
                  interchangeable
                </p>
              </AnimateOnScroll>
              <div className="spacer-10"></div>
              <AnimateOnScroll animation="fade" duration={1200}  delay="900" easing="ease-in-sine">
              <Link className="btn-main lead" to="/explore">
                Explore
              </Link>
              </AnimateOnScroll>
              <div className="mb-sm-30"></div>
            </div>
            <div className="col-md-6 xs-hide">
            <AnimateOnScroll animation="fade" duration={2500}  delay="1000" easing="ease-in-sine">
              <img src={NFT} className="lazy img-fluid" alt="" />
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
