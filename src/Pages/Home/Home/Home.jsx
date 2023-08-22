import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Baner2 from "../Banner2/Baner2";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>               
            </Helmet>
            <Banner></Banner>
            <Baner2></Baner2>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;