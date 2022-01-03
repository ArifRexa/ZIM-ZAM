import React from 'react';
import './Catagories.css'

const Catagories = () => {
    return (
        <div style={{marginTop:'30px'}}>
            <h1 style={{marginBottom:'20px', fontWeight:'700'}}>Product Catagories</h1>
            <div className='cata' >
                <div>
                    <img src='https://images.unsplash.com/photo-1625591340248-6d289000f96a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuZ2xhc3N8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='' />
                    <h3>Sunglass</h3>
                </div>
                <div>
                    <img src='https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dCUyMHNoaXJ0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='' />
                    <h3>T Shirt</h3>
                </div>
                <div>
                    <img src='https://images.unsplash.com/photo-1613631883052-454579eb648f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtZXJhc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60' alt='' />
                    <h3>Camera</h3>
                </div>
                <div>
                    <img src='https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60' alt='' />
                    <h3>Clothes</h3>
                </div>
                <div>
                    <img src='https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='' />
                    <h3>Shoe</h3>
                </div>
                <div>
                    <img src='https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGVhZHBob25lfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='' />
                    <h3>HeadPhone</h3>
                </div>
            </div>
        </div>
    );
};

export default Catagories;