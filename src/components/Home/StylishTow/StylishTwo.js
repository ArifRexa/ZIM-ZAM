import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './StylishTow.css'

const StylishTwo = () => {
    return (
        <div style={{width:'80%', margin:'0 auto', marginTop:'50px'}}>
            <Row>
                <Col sm={12} md={6}>
                   <div className='two'>
                   <h1>Stylish Tea Set</h1>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco ommodo consequat. Duis aute irure.
                    </p>
                   </div>
                </Col>
                <Col sm={12} md={6}>
                    <div className='two-image'>
                        <img src='data:image/jpeg;base64,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' alt='' />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default StylishTwo;