import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXTwitter, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";


const Footer = () => {
  return (
    <div className='mt-12 bg-neutral text-neutral-content text-center mx-auto'>
      <footer className="footer sm:footer-horizontal  p-10">
  <nav> 
    <h3 className=" text-white">CS — Ticket System</h3>
    <p className='text-[#A1A1AA] text-left'>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard <br /> dummy text ever since the 1500s, when <br /> an unknown printer took a galley of type <br /> and scrambled it to make a type specimen <br /> book.</p>
  </nav>
  <nav>
    <h3 className="text-white">Company</h3>
    <a className="text-[#A1A1AA]">About us</a>
    <a className="text-[#A1A1AA]">Our Mission</a>
    <a className="text-[#A1A1AA]">Contact Saled</a>
  </nav>
  <nav>
    <h3 className="text-white">Services</h3>
    <a className="text-[#A1A1AA]">Products & Services</a>
    <a className="text-[#A1A1AA]">Customer Stories</a>
    <a className="text-[#A1A1AA]">Download Apps</a>
  </nav>
  <nav>
    <h3 className="text-white">Information</h3>
    <a className="text-[#A1A1AA]">Privacy Policy</a>
    <a className="text-[#A1A1AA]">Terms & Conditions</a>
    <a className="text-[#A1A1AA]">Join Us</a>
  </nav>
  <nav>
    <h3 className="text-white">Social Links</h3>
    <a className="text-[#A1A1AA]"><FontAwesomeIcon icon={faSquareXTwitter} size="lg"/>@CS — Ticket System</a>
    <a className="text-[#A1A1AA]"> <FontAwesomeIcon icon={faLinkedin} size="lg" />@CS — Ticket System</a>
    <a className="text-[#A1A1AA]">   <FontAwesomeIcon icon={faFacebook} size="lg" />@CS — Ticket System</a>
    
    <a className="text-[#A1A1AA]"><FontAwesomeIcon icon={faEnvelope} size="lg" />support@cst.com</a>
  </nav>
  
</footer>
    <div className='p-5'> © 2025 CS — Ticket System. All rights reserved.</div>
    </div>
  );
};

export default Footer;