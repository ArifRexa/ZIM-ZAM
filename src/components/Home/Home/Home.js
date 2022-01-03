import React from 'react';
import Footer from '../../common/Footer/Footer';
import Banner from '../Banner/Banner';
import Catagories from '../Catagories/Catagories';
import Contemporary from '../Contemporary/Contemporary';
import Express from '../Express/Express';
import Materials from '../Materials/Materials';
import MethodSection from '../MethodSection/MethodSection';
import Product from '../Product/Product';
import ProductDetails from '../ProductDetails/ProductDetails';
import Stylish from '../Stylish/Stylish';
import StylishTwo from '../StylishTow/StylishTwo';
import Upcoming from '../Upcoming/Upcoming';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Catagories></Catagories>
           <Product></Product>
           <Upcoming></Upcoming>
           <Stylish></Stylish>
           <Contemporary></Contemporary>
           <StylishTwo></StylishTwo>
           <MethodSection></MethodSection>
           <Express></Express>
           <Materials></Materials>
           <ProductDetails></ProductDetails>
           <Footer></Footer>
        </div>
    );
};

export default Home;