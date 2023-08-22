import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import '@smastrom/react-rating/style.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://bistro-boss-server-xi-plum.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-20">
            <SectionTitle subHeading="---What Our Clients Say---" heading="TESTIMONIALS">

            </SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {reviews.map(review => <SwiperSlide
                    key={review._id}

                >
                    <div className="mx-24 my-16 flex flex-col items-center">
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            readOnly
                        />
                        <p className="my-8">{review.details}</p>
                        <h3 className="text-2xl text-orange-600 ">{review.name}</h3>
                    </div>
                </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;