import React from 'react';
import Banner from '../Banner/Banner';
import Contemporary from '../Contemporary/Contemporary';
import MethodSection from '../MethodSection/MethodSection';
import Product from '../Product/Product';
import Stylish from '../Stylish/Stylish';
import StylishTwo from '../StylishTow/StylishTwo';
import Upcoming from '../Upcoming/Upcoming';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Product></Product>
           <Upcoming></Upcoming>
           <Stylish></Stylish>
           <Contemporary></Contemporary>
           <StylishTwo></StylishTwo>
           <MethodSection></MethodSection>
        </div>
    );
};

export default Home;