import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const Contemporary = () => {
    return (
        <div>
           <Row>
               <Col sm={12} md={6}>
                   <div>
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKL2vhPaoAAv-VhviRerTtDYCG_NnEvH0UYg&usqp=CAU" alt="" />
                   </div>
               </Col>
               <Col sm={12} md={6}>
                    <div style={{textAlign:'left'}}>
                    <h1>Contemporary Lamp</h1>
                    <p>Browse a large selection of contemporary table lamp options for sale, including tiffany-style lamps, touch lamps and bedside lamps for your bedroom</p>
                    <Button>See More</Button>
                    </div>
               </Col>
           </Row>
        </div>
    );
};

export default Contemporary;