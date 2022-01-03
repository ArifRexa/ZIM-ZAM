import React from 'react';
import Banner from '../Banner/Banner';
import Contemporary from '../Contemporary/Contemporary';
import Product from '../Product/Product';
import Stylish from '../Stylish/Stylish';
import Upcoming from '../Upcoming/Upcoming';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Product></Product>
           <Upcoming></Upcoming>
           <Stylish></Stylish>
           <Contemporary></Contemporary>
        </div>
    );
};

export default Home;