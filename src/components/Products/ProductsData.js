import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductsData = (props) => {
    const { _id, Brand, imgUrl, name, description, price } = props.watch
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img className="img-size" variant="top" src={imgUrl} />
                    <Card.Body>
                        <Card.Title>Model Name: {name}</Card.Title>
                        <Card.Title>Brand Name: {Brand}</Card.Title>
                        <Card.Title>Price: $ {price}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Link to={`/order/${_id}`}>
                            <Button>Order Now</Button>
                        </Link>
                    </Card.Body>
                </Card>

            </Col>

        </div>
    );
};

export default ProductsData;