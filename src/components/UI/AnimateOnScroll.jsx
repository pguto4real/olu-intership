import Aos from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import React, { useEffect } from 'react'

const AnimateOnScroll = ({children, animation = 'fade-up' ,duration = 1000,delay="", easing= 'ease-in-out',once="true"}) => {
    // Initialize AOS when the component mounts
  useEffect(() => {
    Aos.init({
      duration: 1000, // Default duration of animations
      easing: 'ease-in-out', // Default easing function
      once: true, // Animation happens only once
      mirror: false, // Disable reverse animation on scroll up
    });
  }, []);

  return (
    // Apply AOS attributes to the wrapping div, passing in props for customization
    <div data-aos={animation} data-aos-duration={duration} data-aos-delay={delay} data-aos-easing={easing} data-aos-once={once} >
      {children}
      
    </div>
  );
}

export default AnimateOnScroll