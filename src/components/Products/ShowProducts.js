import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ShowProducts = props => {
    const {img,price,name,des} = props.product
    return (
        <div>
             <Col>
                        <Card style={{borderRadius:'40px'}}>
                            <Card.Img style={{width:'80%', margin:'0 auto', marginTop:'20px', borderRadius:'30px'}} variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <h4>Price: ${price}</h4>
                                <Card.Text>
                                   {des}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
        </div>
    );
};

export default ShowProducts;