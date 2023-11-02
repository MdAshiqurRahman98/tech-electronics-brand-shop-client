import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const BrandsCard = ({ brand }) => {
    const { _id, brandImage, brandName } = brand || {};

    return (
        <>
            <Link to={`/products/${_id}`}>
                <div className="card rounded-lg p-5 bg-[#F8F8F8]">
                    <div className="mb-1 flex flex-grow justify-center">
                        <img className="w-80 h-52 object-cover" src={brandImage} alt="Brand image" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-center mt-5 mb-1 px-2 py-[2px]">{brandName}</h3>
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