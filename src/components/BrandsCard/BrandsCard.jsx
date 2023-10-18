import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const BrandsCard = ({ brand }) => {
    const { id, brand_image, brand_name } = brand || {};

    return (
        <>
            <Link to={`/products/${id}`}>
                <div className="card rounded-lg p-5 bg-[#F8F8F8]">
                    <div className="mb-1 flex flex-grow justify-center">
                        <img className="w-80 h-52" src={brand_image} alt="Brand image" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-center mt-5 mb-1 px-2 py-[2px]">{brand_name}</h3>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default BrandsCard;

BrandsCard.propTypes = {
    brand: PropTypes.object
}