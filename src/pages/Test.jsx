import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS for animations

const Test = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Global animation duration in milliseconds
      easing: 'ease-in-out', // Default easing function for AOS
      once: true, // Animation happens only once while scrolling down
      mirror: false, // Disable reverse animation on scroll up
    });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Custom AOS Animation</h1>

      {/* Elements with AOS animations */}
      <div
        className="bg-blue-500 text-white p-4 rounded mb-4"
        data-aos="fade" // Fade animation without vertical movement
        data-aos-delay="500" // Delay animation by 500 milliseconds
        data-aos-easing="ease-in-sine" // Apply easing
      >
        This element fades in without moving from the bottom.
      </div>

      <div
        className="bg-green-500 text-white p-4 rounded mb-4"
        data-aos="zoom-in" // Zoom-in animation
        data-aos-delay="300" // Delay animation by 300 milliseconds
        data-aos-easing="ease-in-sine" // Apply easing
      >
        This element zooms in without vertical movement.
      </div>

      <div
        className="bg-red-500 text-white p-4 rounded mb-4"
        data-aos="fade-left" // Fade from left animation
        data-aos-delay="200" // Delay animation by 200 milliseconds
        data-aos-easing="ease-in-sine" // Apply easing
      >
        This element fades in from the left without vertical movement.
      </div>

      <div
        className="bg-purple-500 text-white p-4 rounded"
        data-aos="fade-right" // Fade from right animation
        data-aos-delay="100" // Delay animation by 100 milliseconds
        data-aos-easing="ease-in-sine" // Apply easing
      >
        This element fades in from the right without vertical movement.
      </div>
    </div>
  );
};

export default Test;