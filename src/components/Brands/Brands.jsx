import BrandsCard from "../BrandsCard/BrandsCard";
import PropTypes from 'prop-types';

const Brands = ({ brands }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
            {brands?.map((brand) => (
                <BrandsCard key={brand.id} brand={brand}></BrandsCard>
            ))}
        </div>
    );
};

export default Brands;

Brands.propTypes = {
    brands: PropTypes.array
}