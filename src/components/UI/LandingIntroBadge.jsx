import React from 'react'
import AnimateOnScroll from './AnimateOnScroll'

export const LandingIntroBadge = ({icon,text,desc}) => {
  return (
    <div className="col-lg-4 col-md-6 mb-sm-30">
            <div className="feature-box f-boxed style-3">
            <AnimateOnScroll animation="fade-up" duration={1200}  delay="0" easing="ease-in-sine">
              <i className={`bg-color-2 i-boxed ${icon}`}></i>
              </AnimateOnScroll>
              <div className="text">
              <AnimateOnScroll animation="fade" duration={1200}  delay="350" easing="ease-in-sine">
                <h4 className="">{text}</h4>
                </AnimateOnScroll>
                <AnimateOnScroll animation="fade-up" duration={1200}  delay="250" easing="ease-in-sine">
                <p>
                 {desc}
                </p>
                </AnimateOnScroll>
              </div>
              <i className={`wm ${icon}`}></i>
            </div>
          </div>
  )
}
