import React, { useEffect, useState } from 'react'

const CounterNewItem = ({expiryDate}) => {
  const [timeLeft, setTimeLeft] = useState(
        Math.floor(expiryDate / 1000) - Math.floor(Date.now() / 1000)
      );
    
      // Use effect to set up the countdown
      useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
    
        // Clean up the interval on component unmount
        return () => clearInterval(timer);
      }, []);
    
      // Calculate hours, minutes, and seconds
      const hours = Math.floor(timeLeft / 3600);
      const minutes = Math.floor((timeLeft % 3600) / 60);
      const seconds = timeLeft % 60;
    
      // Format time as "5h 30m 32s"
      const formattedTime = `${hours}h ${minutes}m ${seconds}s`;
    return (
     
       <div className="de_countdown">{formattedTime}</div>
    )
  
}

export default CounterNewItem