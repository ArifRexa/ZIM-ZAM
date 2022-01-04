import React, { useState, useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Placeorder = () => {
   
    const { orderId } = useParams()
    const [single, setSingle] = useState([])

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    useEffect(() => {
        fetch(`http://localhost:5000/product/${orderId}`)
            .then(res => res.json())
            .then(data => setSingle(data))
    }, [orderId])

    return (
        <div style={{ width: '90%', margin: '0 auto', marginTop: '30px' }}>
            <Row>
                <Col sm={12} md={6}>
                    <div style={{ borderLeft: '40px solid yellow', borderTop: '40px solid grey', borderRadius: '30px', borderBottom: '30px solid grey' }}>
                        <img style={{ marginTop: '10px', borderRadius: '40px', width: '70%' }} src={single.img} alt='' />
                        <h1>{single.name}</h1>
                        <h4>Price: $ {single.price}</h4>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div style={{marginTop:'100px', borderRight:'30px solid grey', borderTop:'30px solid blue',  borderBottom:'30px solid blue', borderRadius:'30px'}}>
                        <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input style={{marginTop:'10px', padding:'8px 10px', borderRadius:'20px', border:'1px solid grey', width:'320px'}} {...register("email")} /> <br />
                            <input style={{marginTop:'10px', padding:'8px 10px', borderRadius:'20px', border:'1px solid grey', width:'320px'}} {...register("displayName")} /> <br />
                            <input style={{marginTop:'10px', padding:'8px 10px', borderRadius:'20px', border:'1px solid grey', width:'320px'}} {...register("productName")} /> <br />
                            <input style={{marginTop:'10px', padding:'8px 10px', borderRadius:'20px', border:'1px solid grey', width:'320px'}} {...register("price")} /> <br />
                            <input style={{marginTop:'10px', padding:'8px 10px', borderRadius:'20px', border:'1px solid grey', width:'320px'}} {...register("phoneNumber")} /> <br />
                            <input style={{marginTop:'10px', padding:'8px 10px', borderRadius:'20px', border:'1px solid grey', width:'320px', backgroundColor:'blue', color:'white', fontWeight:'700', marginBottom:'10px'}} type="submit" /> <br />
                            <Link to='/home'><Button style={{width:'100%', marginBottom:'10px', borderRadius:'20px'}}>Back Home</Button> </Link>
                        </form>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Placeorder;