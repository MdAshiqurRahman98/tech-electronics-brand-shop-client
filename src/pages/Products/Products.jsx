import { Link, useLoaderData } from "react-router-dom";
import ProductsCard from "../ProductsCard/ProductsCard";
import ProductsSlider from "../ProductsSlider/ProductsSlider";

const Products = () => {
    const loadedProducts = useLoaderData();

    return (
        <div>
            {
                loadedProducts ? <>
                    <div className="mb-11">
                        <ProductsSlider></ProductsSlider>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-9'>
                        {
                            loadedProducts.map(product => <ProductsCard
                                key={product._id}
                                product={product}
                            ></ProductsCard>)
                        }
                    </div>
                </> : <div className="text-center mt-52">
                    <h3 className="text-3xl my-5">Oops!!!</h3>
                    <p className="mb-9 text-lg">No product available</p>
                    <Link to='/'><button className="btn bg-[#FF444A] font-semibold text-white normal-case hover:bg-[#FF444A]">Go Home</button></Link>
                </div>
            }
        </div>
    );
};

export default Products;