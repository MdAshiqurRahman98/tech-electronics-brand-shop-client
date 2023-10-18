import { useLoaderData } from "react-router-dom";
import Banner from "../Shared/Banner/Banner";
import Brands from "../../components/Brands/Brands";

const Home = () => {
    const brands = useLoaderData();

    return (
        <div className="text-center">
            <Banner></Banner>
            <h3 className="text-3xl font-bold text-center mb-14">Top Brands</h3>
            <Brands brands={brands}></Brands>

            <h3 className="text-3xl font-bold text-center mt-20 mb-14">To Grab Top Brands Product</h3>
            <ul className="steps steps-vertical lg:steps-horizontal lg:w-[700px] text-lg font-semibold mb-11">
                <li className="step step-neutral">Login/Register</li>
                <li className="step step-neutral">View Details</li>
                <li className="step">Add to Cart</li>
                <li className="step">Purchase</li>
            </ul>

            <h3 className="text-3xl font-bold text-center mt-9 mb-9">About Us</h3>
            <p className="text-center mb-14">
                B-tech Technology is a distinguished technology and electronics brand shop, renowned for its extensive range of products from industry giants like Apple, Samsung, Sony, Microsoft, Google, and Intel. With a resolute dedication to delivering cutting-edge innovations and unwavering commitment to quality, B-tech Technology stands as the ultimate destination for tech enthusiasts. Whether you`re in search of the latest smartphones, high-performance laptops, or premium audio equipment, this store offers a carefully curated selection of top-tier products, catering to a diverse range of needs and preferences. Their enduring commitment to customer satisfaction has cemented their position as a trusted and reliable source for the best offerings in the ever-evolving world of technology, making them a household name in the realm of technology retail.
            </p>
        </div>
    );
};

export default Home;