import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyCartCard from "../MyCartCard/MyCartCard";

const MyCart = () => {
    const loadedProducts = useLoaderData();
    const [products, setProducts] = useState(loadedProducts);

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-9'>
                {
                    products.map(product => <MyCartCard
                        key={product._id}
                        product={product}
                        products={products}
                        setProducts={setProducts}
                    ></MyCartCard>)
                }
            </div>
        </div>
    );
};

export default MyCart;