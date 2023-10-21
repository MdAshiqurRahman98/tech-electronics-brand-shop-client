import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import MyCartCard from "../MyCartCard/MyCartCard";

const MyCart = () => {
    const loadedProducts = useLoaderData();
    const [products, setProducts] = useState(loadedProducts);

    return (
        <div>
            {
                products ? <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-9'>
                    {
                        products.map(product => <MyCartCard
                            key={product._id}
                            product={product}
                            products={products}
                            setProducts={setProducts}
                        ></MyCartCard>)
                    }
                </div> : <div className="text-center mt-52">
                    <h3 className="text-3xl my-5">Oops!!!</h3>
                    <p className="mb-9 text-lg">No product available</p>
                    <Link to='/'><button className="btn bg-[#FF444A] font-semibold text-white normal-case hover:bg-[#FF444A]">Go Home</button></Link>
                </div>
            }
        </div>
    );
};

export default MyCart;