import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductsCard from "../ProductsCard/ProductsCard";
import ProductsSlider from "../ProductsSlider/ProductsSlider";


const Products = () => {
    const loadedProducts = useLoaderData();
    const [products, setProducts] = useState(loadedProducts);

    return (
        <div>
            <div className="mb-7">
                <ProductsSlider></ProductsSlider>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-9'>
                {
                    products.map(product => <ProductsCard
                        key={product._id}
                        product={product}
                        products={products}
                        setProducts={setProducts}
                    ></ProductsCard>)
                }
            </div>
        </div>
    );
};

export default Products;