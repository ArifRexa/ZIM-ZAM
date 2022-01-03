import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const Express = () => {
    return (
        <div style={{marginTop:'70px', backgroundColor:'#DFDAF0 ', padding:'40px 0'}}>
          <div style={{width:'90%', margin:'0 auto'}}>
          <Row>
               <Col sm={12} md={6}>
                   <h3>Order now for an express delivery in 24h!</h3>
               </Col>
               <Col sm={12} md={6}>
                    <Button style={{padding:'10px 80px', border:'1px solid grey', borderRadius:'40px'}}>Order Now</Button>
               </Col>
           </Row>
          </div>
        </div>
    );
};

export default Express;