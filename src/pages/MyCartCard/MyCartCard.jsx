import PropTypes from 'prop-types';
import Swal from "sweetalert2";

const MyCartCard = ({ product, products, setProducts }) => {
    const { _id, image, name, brandName, type, price, rating } = product || {};

    const handlePurchase = () => {
        Swal.fire({
            icon: "success",
            title: "Success!",
            text: "You have purchased successfully",
        });
    }

    const handleDelete = _id => {
        console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://brand-shop-server-topaz.vercel.app/userProducts/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted',
                                'success'
                            )
                            const remaining = products.filter(prod => prod._id !== _id);
                            setProducts(remaining);
                        }
                    })
            }
        })
    }

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

                <button onClick={handlePurchase} className="btn btn-sm text-white bg-[#FF444A] hover:bg-[#FF444A] normal-case text-[15px] font-semibold rounded mt-3">Purchase</button>

                <button onClick={() => handleDelete(_id)} className="btn btn-sm text-white bg-[#FF444A] hover:bg-[#FF444A] normal-case text-[15px] font-semibold rounded mt-3 ml-3">Delete</button>
            </div>
        </div>
    );
};

export default MyCartCard;

MyCartCard.propTypes = {
    product: PropTypes.object,
    products: PropTypes.object,
    setProducts: PropTypes.func
}