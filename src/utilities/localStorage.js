const getStoredProduct = () => {
    const storedProduct = localStorage.getItem('product');
    if (storedProduct) {
        return JSON.parse(storedProduct);
    }
    return [];
}

const saveProduct = id => {
    const storedProduct = getStoredProduct();
    const exists = storedProduct.find(productId => productId === id);
    if (!exists) {
        storedProduct.push(id);
        localStorage.setItem('service', JSON.stringify(storedProduct))
    }
}

export { getStoredProduct, saveProduct }