import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleProduct = props => {
    const {_id,img,price,name,des} = props.product
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
                          <Link to={`/placeorder/${_id}`}><Button style={{width:'100%', borderRadius:'30px'}}>Place Order</Button></Link>
                        </Card>
                    </Col>
        </div>
    );
};

export default SingleProduct;