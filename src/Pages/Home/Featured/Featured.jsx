import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading="check it out" heading="Featured Item">

            </SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-50 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                    <div className="md:ml-10 ">
                        <p>March 20, 2023</p>
                        <p>WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quaerat culpa eius delectus. Sint, aliquam sit. Ullam similique, accusamus dolores perspiciatis nam non voluptas velit sed nostrum facilis eaque beatae facere excepturi quam nobis aut labore aperiam inventore expedita quos nulla. Alias atque ut nihil tenetur exercitationem tempora iure magni?</p>
                        <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                    </div>
            </div>
        </div>
    );
};

export default Featured;