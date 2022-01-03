import React from 'react';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';
import Upcoming from '../Upcoming/Upcoming';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Product></Product>
           <Upcoming></Upcoming>
        </div>
    );
};

export default Home;