import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ProductsCard = ({ product }) => {
    const { _id, image, name, brandName, type, price, rating } = product || {};

    return (
        <>
            {
                product ? <div className="card card-side rounded-lg p-5 bg-[#F8F8F8] h-[235px]">
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
                    : <div className="text-center mt-52">
                        <h3 className="text-3xl my-5">Oops!!!</h3>
                        <p className="mb-9 text-lg">No product available</p>
                        <Link to='/'><button className="btn bg-[#FF444A] font-semibold text-white normal-case hover:bg-[#FF444A]">Go Home</button></Link>
                    </div>
            }
        </>
    );
};

export default ProductsCard;

ProductsCard.propTypes = {
    product: PropTypes.object
}