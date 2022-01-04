import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ShowProducts from './ShowProducts';

const AllProducts = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div style={{width:'90%', margin:'0 auto',marginTop:'70px', marginBottom:'40px'}}>
            
            <Row xs={1} md={3} className="g-4">
                
                   {
                       products.map(product => <ShowProducts product={product}></ShowProducts>)
                   }
                
            </Row>
        </div>
    );
};

export default AllProducts;