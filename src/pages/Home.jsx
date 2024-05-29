
import Banner from '../components/home/Banner';
import Products from '../components/home/Products';
import Accordian from '../components/home/Accordian';
import { useLoaderData } from 'react-router-dom';
import FeaturesSection from '../components/home/FeaturedSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CategoryComponent from '../components/home/CategoryComponent';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner />
            <CategoryComponent />
            <Products data = {data} />
            <Accordian />
            <FeaturesSection />
            <TestimonialsSection />
        </div>
    );
};

export default Home;