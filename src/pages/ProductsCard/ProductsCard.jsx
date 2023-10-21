import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ProductsCard = ({ product }) => {
    const { _id, image, name, brandName, type, price, rating } = product || {};

    return (
        <div className="card card-side rounded-lg p-5 bg-[#F8F8F8] h-[235px]">
            <div>
                <img className="w-52 h-full" src={image} alt="Product" />
            </div>
            <div className="pl-7">
                <h3 className="text-lg font-bold mb-2">{name}</h3>
                <p className="font-medium mb-1">Brand: {brandName}</p>
                <p className="font-medium mb-1">Type: {type}</p>
                <p className="font-medium mb-1">Price: ${price}</p>
                <p className="font-medium mb-1">Rating: {rating}</p>
                <Link to={`/product/${_id}`}>
                    <button className="btn btn-sm text-white bg-[#FF444A] hover:bg-[#FF444A] normal-case text-[15px] font-semibold rounded mt-3">Details</button>
                </Link>
                <Link to={`/updateProduct/${_id}`}>
                    <button className="btn btn-sm text-white bg-[#FF444A] hover:bg-[#FF444A] normal-case text-[15px] font-semibold rounded mt-3 ml-3">Update</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductsCard;

ProductsCard.propTypes = {
    product: PropTypes.object
}