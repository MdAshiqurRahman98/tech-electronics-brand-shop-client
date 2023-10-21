import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetail = () => {
    const products = useLoaderData();
    const { image, name, brandName, type, price, rating, shortDescription, description } = products || {};

    const handleUserAddProduct = () => {
        const userNewProduct = { image, name, brandName, type, price, rating, shortDescription, description };

        // Send data to the server
        fetch('https://brand-shop-server-d947aetvg.vercel.app/userProducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userNewProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added to Cart Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            });
    }

    return (
        <div className="mb-11">
            <figure className="flex justify-center"><img className="rounded-md w-[300px] h-[300px]" src={image} alt="Service image" /></figure>
            <div className="flex justify-end">
                <button onClick={handleUserAddProduct} className="btn text-white bg-[#FF444A] hover:bg-[#FF444A] normal-case text-lg font-medium rounded mr-9">Add to Cart</button>
            </div>
            <h3 className="my-5 text-4xl font-bold">{name}</h3>
            <p className="text-justify">{description}</p>
        </div>
    );
};

export default ProductDetail;