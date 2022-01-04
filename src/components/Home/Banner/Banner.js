import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div style={{backgroundColor:'#4E4664'}}>
           <div style={{width:'80%', margin:'0 auto', padding:'50px 0'}}>
           <Row>
                <Col style={{ textAlign: 'left' }} xs={12} md={6}>
                    <div  className='banner'>
                        <div>
                        <h1>Shop And Fun</h1>
                        <p>Shop in-store or order online for home delivery or store pickup. Discover how we?ve made it easier than ever to save big on your favorites.</p>
                        <Button>View More</Button>
                        </div>
                    </div>
                </Col>
                <Col className='ima' xs={12} md={6}>
                    <img src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c29mYXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='' />
                </Col>
            </Row>
           </div>
        </div>
    );
};

export default Banner;