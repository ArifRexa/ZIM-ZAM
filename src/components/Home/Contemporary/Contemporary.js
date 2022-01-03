import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './Contemporary.css'

const Contemporary = () => {
    return (
        <div style={{width:'80%', margin:'0 auto', marginTop:'80px'}}>
           <Row>
               <Col sm={12} md={6}>
                   <div className='conte-image'>
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6YAwha3v13jg1coiYUsBWKwEJdSwewkagIw&usqp=CAU" alt="" />
                   </div>
               </Col>
               <Col sm={12} md={6}>
                    <div className="conte" style={{textAlign:'left'}}>
                    <div>
                    <h1>Contemporary Lamp</h1>
                    <p>Browse a large selection of contemporary table lamp options for sale, including tiffany-style lamps, touch lamps and bedside lamps for your bedroom</p>
                    <Button>See More</Button>
                    </div>
                    </div>
               </Col>
           </Row>
        </div>
    );
};

export default Contemporary;