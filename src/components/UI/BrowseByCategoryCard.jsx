import React from 'react'
import { Link } from 'react-router-dom'
import AnimateOnScroll from './AnimateOnScroll'

export const BrowseByCategoryCard = ({ text, icon }) => {
    return (

        <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <AnimateOnScroll animation="fade-left" duration={800} delay="200" easing="ease-in-sine">
                <Link to="/explore" className="icon-box style-2 rounded">
                    <i className={`fa ${icon}`}></i>
                    <span>{text}</span>
                </Link>
            </AnimateOnScroll>
        </div>
    )
}
