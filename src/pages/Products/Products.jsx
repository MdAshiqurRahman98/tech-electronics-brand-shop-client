import { useLoaderData } from "react-router-dom";
import ProductsCard from "../ProductsCard/ProductsCard";
import ProductsSlider from "../ProductsSlider/ProductsSlider";

const Products = () => {
    const loadedProducts = useLoaderData();

    return (
        <div>
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
        </div>
    );
};

export default Products;