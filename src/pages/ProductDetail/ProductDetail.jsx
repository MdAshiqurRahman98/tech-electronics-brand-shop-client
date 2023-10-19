import { useLoaderData, useParams } from "react-router-dom";
import { saveProduct } from "../../utilities/localStorage";
import Swal from "sweetalert2";

const ProductDetail = () => {
    const products = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const product = products.find(product => product.id === idInt);
    // console.log(product);

    const handleProduct = () => {
        saveProduct(idInt);

        Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Product Added to Cart Successfully",
        });
    }

    return (
        <div className="mb-11">
            <figure className="flex justify-center"><img className="rounded-md w-[300px] h-[300px]" src={product.image} alt="Service image" /></figure>
            <div className="flex justify-end">
                <button onClick={handleProduct} className="btn text-white bg-[#FF444A] hover:bg-[#FF444A] normal-case text-lg font-medium rounded mr-9">Add to Cart</button>
            </div>
            <h3 className="my-5 text-4xl font-bold">{product.name}</h3>
            <p className="text-justify">{product.description}</p>
        </div>
    );
};

export default ProductDetail;