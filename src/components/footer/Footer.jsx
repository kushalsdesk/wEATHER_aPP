import React from 'react';
import "./Footer.css";

const Footer = ({data}) => {
  return (
 
   <div className="footer">
        &#169;<a className={data.weather[0].icon.includes("n")? ` ${data.weather[0].main}night` : ` ${data.weather[0].main}day`} target='blank' href="https://github.com/Kushalmydesk"> kushal_mydesk</a>
   </div>
 

  );
}

export default Footer;
