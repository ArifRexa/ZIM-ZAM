import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='foo'>
           <div className='footer'>
               <div>
                   <h4>About Us</h4>
                   <p>We've created an automatic About Us Page Generator tool that will give you short, medium, and long versions of About Us page text that you can copy and paste directly onto your website. Just fill in the blanks on the form and get a custom About Us page that you can copy-and-paste directly onto your own website. If you'd rather use a text-based template, there's one below.</p>
               </div>
               <div>
                   <h4>Usefull Links</h4>
                   <p>Downloadable product</p>
                   <p>On sale product</p>
                   <p>Our new product</p>
                   <p>Order tracking</p>
               </div>
               <div className='link'>
                   <h4>Contact Us</h4>
                   <span><i class="fab fa-facebook"></i></span>
                   <span><i class="fab fa-instagram"></i></span>
                   <span><i class="fab fa-twitter"></i></span>
                   <span><i class="fab fa-whatsapp"></i></span>
                   <h3>Email: 123@gmail.com</h3>
                   <h3>Phone: 017000000</h3>
               </div>
           </div>
        </div>
    );
};

export default Footer;