import React from 'react';
import './MethodSection.css'

const MethodSection = () => {
    return (
        <div style={{marginTop:'90px'}}>
           <div className='method'>
               <div className='first'>
                   <h3> <span><i class="fas fa-shopping-bag"></i></span> Shop Online</h3>
                   <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco ommodo consequat.</p>
               </div>
               <div className='first'>
                   <h3> <span><i class="fas fa-comment-dollar"></i></span> Free Shipping</h3>
                   <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco ommodo consequat.</p>
               </div>
               <div className='first'>
                   <h3> <span><i class="far fa-clock"></i></span>Return Policy</h3>
                   <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco ommodo consequat.</p>
               </div>
               <div className='first'>
                   <h3> <span><i class="far fa-credit-card"></i></span>Payment Method</h3>
                   <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco ommodo consequat.</p>
               </div>
              
           </div>
        </div>
    );
};

export default MethodSection;